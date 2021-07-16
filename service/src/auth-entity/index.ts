import { ValueEntity } from "@lightbend/akkaserverless-javascript-sdk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import api from "../../generated/user/api";
import {
  Context,
  LoginRequest,
  RegistrationRequest,
  CommandType,
  User,
  DomainProtos,
} from "./index.types";
import loadDomainProtos from "../utils/load-domain-protos";
import toJsonError from "../utils/to-json-error";

const { Token } = api.js.chirp.user.api;
const { Empty } = api.google.protobuf;

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET!;

const handler = async (
  cmd: RegistrationRequest | LoginRequest,
  state: User,
  ctx: Context
) => {
  switch (cmd.type) {
    case CommandType.Register: {
      if (state.userName) {
        ctx.fail(toJsonError("User already exists!"));
      }
      if (!cmd.password) {
        ctx.fail(toJsonError("Password must be specified"));
      }
      const hash = await bcrypt.hash(cmd.password, SALT_ROUNDS);
      state.userName = cmd.userName;
      state.password = hash;
      ctx.updateState(state);
      return Empty.create();
    }
    case CommandType.Login: {
      if (!state.userName || state.userName !== cmd.userName) {
        ctx.fail(toJsonError("Incorrect username or password."));
      }

      const passwordMatch = await bcrypt.compare(cmd.password, state.password);

      if (passwordMatch) {
        return Token.create({
          value: jwt.sign(
            {
              user: state.userName,
            },
            JWT_SECRET,
            { expiresIn: "1h" }
          ),
        });
      }

      ctx.fail(toJsonError("Incorrect username or password."));
      return Empty.create();
    }
    default: {
      ctx.fail(toJsonError("Unknown command!"));
      return Empty.create();
    }
  }
};

// Setup
const authEntity: ValueEntity = new ValueEntity(
  ["user_api.proto", "user_domain.proto"],
  "js.chirp.user.api.UserService",
  "user",
  {
    includeDirs: ["protos/user"],
    forwardHeaders: [],
  }
);

// We can't use the statically loaded proto-js files here, because our SDK doesn't support it yet.
// This is only an issue, if we want to communicate with our proxy,
// user facing (api) protos work with the statically loaded proto-js files without an issue.
const protos = loadDomainProtos<DomainProtos>(
  authEntity,
  "js.chirp.user.domain.",
  ["User"]
);

authEntity
  .setInitial(() => protos.UserProto.create({ userName: "", password: "" }))
  .setCommandHandlers({
    Register: (req, state, ctx) =>
      handler({ ...req, type: CommandType.Register }, state, ctx),
    Login: (req, state, ctx) =>
      handler({ ...req, type: CommandType.Login }, state, ctx),
  });

export default authEntity;
