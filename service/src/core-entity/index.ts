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
} from "./index.types";
import loadDomainProtos from "../utils/load-domain-protos";

const { Empty } = api.google.protobuf;

const { JWT_SECRET } = process.env;

const commandHandler =
  (protos: DomainProtos) =>
  async (
    cmd: ChirpRequest | LikeRequest | GetChirpsRequest,
    state: Chirps,
    ctx: Context
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const authHeader = ctx.metadata.entries.find(
      ({ key }: { key: string }) => key === "Authorization"
    ).stringValue;

    const [, token] = authHeader.split(" ");
    console.log("jwtToken", token);

    const tokenDecoded = jwt.verify(token, JWT_SECRET!);
    console.log("tokenDecoded", tokenDecoded);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (tokenDecoded.user !== state.userName) {
      ctx.fail("Auth error!");
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
        // Validation:
        // Check that the item that we're removing actually exists.
        const existing = state.chirps.find(
          ({ chirpId }) => chirpId === cmd.chirpId
        );
        // If not, fail the command.
        if (!existing) {
          ctx.fail("Like failed!");
        } else {
          // Otherwise, emit an item removed event.
          const liked = LikedProto.create({ chirpId: cmd.chirpId });
          ctx.emit(liked);
        }
        return Empty.create();
      }
      case CommandType.GetChirps: {
        return state;
      }
      default: {
        ctx.fail("Unknown command!");
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
          // eslint-disable-next-line no-param-reassign
          chirp.likes! += 1;
        }
      });
      break;
    }
    default: {
      return state;
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
        commandHandler(protos)({ ...cmd, type: CommandType.Chirp }, state, ctx),
      Like: (cmd, state, ctx) =>
        commandHandler(protos)({ ...cmd, type: CommandType.Like }, state, ctx),
      GetChirps: (cmd, state, ctx) =>
        commandHandler(protos)(
          { ...cmd, type: CommandType.GetChirps },
          state,
          ctx
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
