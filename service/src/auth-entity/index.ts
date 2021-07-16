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
} from "./index.types";

const { Token } = api.js.chirp.user.api;
const { Empty } = api.google.protobuf;

const SALT_ROUNDS = 10;
const { JWT_SECRET } = process.env;

const handler = async (
  cmd: RegistrationRequest | LoginRequest,
  state: User,
  ctx: Context
) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log("ctx.metadata", ctx.metadata);

  switch (cmd.type) {
    case CommandType.Register: {
      if (state.userName) {
        ctx.fail("User already exists!");
      }
      const hash = await bcrypt.hash(cmd.password, SALT_ROUNDS);
      state.userName = cmd.userName;
      state.password = hash;
      ctx.updateState(state);
      return Empty.create();
    }
    case CommandType.Login: {
      if (!state.userName || state.userName !== cmd.userName) {
        ctx.fail("Auth error!");
      }

      const passwordMatch = await bcrypt.compare(cmd.password, state.password);

      if (passwordMatch) {
        return Token.create({
          value: jwt.sign(
            {
              user: state.userName,
            },
            JWT_SECRET!,
            { expiresIn: "1h" }
          ),
        });
      }
      ctx.fail("Auth error!");
      return Empty.create();
    }
    default: {
      ctx.fail("Unknown command!");
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
)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // We can't use the statically typed proto-js files here, because our SDK doesn't support it yet.
  .setInitial(() => authEntity.lookupType("js.chirp.user.domain.User").create())
  .setCommandHandlers({
    Register: (req, state, ctx) =>
      handler({ ...req, type: CommandType.Register }, state, ctx),
    Login: (req, state, ctx) =>
      handler({ ...req, type: CommandType.Login }, state, ctx),
  });

export default authEntity;
