import { EventSourcedEntity } from "@lightbend/akkaserverless-javascript-sdk";
import jwt from "jsonwebtoken";
import api from "../../generated/core/api";
import {
  Chirped,
  ChirpRequest,
  Chirps,
  CommandType,
  Context,
  EventType,
  GetChirpsRequest,
  Liked,
  LikeRequest,
  DomainProtos,
  Metadata,
  JwtPayload,
} from "./index.types";
import loadDomainProtos from "../utils/load-domain-protos";
import toJsonError from "../utils/to-json-error";

const { Empty } = api.google.protobuf;

const JWT_SECRET = process.env.JWT_SECRET!;

const findHeader = (metadata: Metadata, name: string) =>
  metadata.entries.find(({ key }) => key === name)?.stringValue;

const commandHandler =
  (protos: DomainProtos) =>
  async (
    cmd: ChirpRequest | LikeRequest | GetChirpsRequest,
    state: Chirps,
    ctx: Context
  ) => {
    const authHeader = findHeader(ctx.metadata, "Authorization");
    if (!authHeader) {
      ctx.fail(toJsonError("Error missing Authorization header."));
      return Empty.create();
    }

    try {
      const [, token] = authHeader.split(" ");
      const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;
      if (decodedToken.user !== state.userName) {
        ctx.fail(toJsonError("Auth error!"));
        return Empty.create();
      }
    } catch (e) {
      if (e.name === "TokenExpiredError") {
        ctx.fail(toJsonError("Token expired, please login again."));
      } else {
        ctx.fail(toJsonError("Auth error!"));
      }
      return Empty.create();
    }

    const { ChirpedProto, LikedProto } = protos;
    switch (cmd.type) {
      case CommandType.Chirp: {
        const chirped = ChirpedProto.create({
          chirp: {
            chirpId: `${Date.now()}`,
            text: cmd.text,
            likes: 0,
          },
        });
        ctx.emit(chirped);
        return Empty.create();
      }
      case CommandType.Like: {
        const existing = state.chirps.find(
          ({ chirpId }) => chirpId === cmd.chirpId
        );
        if (!existing) {
          ctx.fail(toJsonError("Unknown chirp!"));
        } else {
          const liked = LikedProto.create({ chirpId: cmd.chirpId });
          ctx.emit(liked);
        }
        return Empty.create();
      }
      case CommandType.GetChirps: {
        return state;
      }
      default: {
        return Empty.create();
      }
    }
  };

const eventHandler = (event: Chirped | Liked, state: Chirps) => {
  switch (event.type) {
    case EventType.Chirped: {
      state.chirps.unshift(event.chirp!);
      break;
    }
    case EventType.Liked: {
      state.chirps.forEach((chirp) => {
        if (chirp.chirpId === event.chirpId) {
          chirp.likes! += 1;
        }
      });
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

// Setup
const coreEntity: EventSourcedEntity = new EventSourcedEntity(
  ["core_api.proto", "core_domain.proto"],
  "js.chirp.api.ChirpService",
  "chirps",
  {
    includeDirs: ["protos/core"],
    forwardHeaders: ["Authorization"],
  }
);

// We can't use the statically loaded proto-js files here, because our SDK doesn't support it yet.
// This is only an issue, if we want to communicate with our proxy,
// user facing (api) protos work with the statically loaded proto-js files without an issue.
const protos = loadDomainProtos<DomainProtos>(coreEntity, "js.chirp.domain.", [
  "Chirps",
  "Chirped",
  "Liked",
]);

coreEntity
  .setInitial((userName) => protos.ChirpsProto.create({ userName, chirps: [] }))
  .setBehavior(() => ({
    commandHandlers: {
      Chirp: (cmd, state, ctx) =>
        commandHandler(protos)(
          { ...cmd, type: CommandType.Chirp },
          state,
          ctx as Context
        ),
      Like: (cmd, state, ctx) =>
        commandHandler(protos)(
          { ...cmd, type: CommandType.Like },
          state,
          ctx as Context
        ),
      GetChirps: (cmd, state, ctx) =>
        commandHandler(protos)(
          { ...cmd, type: CommandType.GetChirps },
          state,
          ctx as Context
        ),
    },
    eventHandlers: {
      Chirped: (event, state) =>
        eventHandler({ ...event, type: EventType.Chirped }, state),
      Liked: (event, state) =>
        eventHandler({ ...event, type: EventType.Liked }, state),
    },
  }));

export default coreEntity;
