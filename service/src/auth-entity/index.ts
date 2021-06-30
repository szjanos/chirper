import { ValueEntity } from "@lightbend/akkaserverless-javascript-sdk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import api from "../../generated/user/api";
import {
  Context,
  LoginRequest,
  RegistrationRequest,
  RequestTypes,
  User,
} from "./index.types";

const { Token } = api.js.chirp.user.api;
const { Empty } = api.google.protobuf;

const SALT_ROUNDS = 10;
const { JWT_SECRET } = process.env;

const handleRequest = async (
  req: RegistrationRequest | LoginRequest,
  state: User,
  ctx: Context
) => {
  switch (req.type) {
    case RequestTypes.Register: {
      if (state.userName) {
        ctx.fail("User already exists!");
      }
      const hash = await bcrypt.hash(req.password, SALT_ROUNDS);
      state.userName = req.userName;
      state.password = hash;
      ctx.updateState(state);
      return Empty.create();
    }
    case RequestTypes.Login: {
      if (!state.userName || state.userName !== req.userName) {
        ctx.fail("Auth error!");
      }

      const passwordMatch = await bcrypt.compare(req.password, state.password);

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
  ["api.proto", "domain.proto"],
  "js.chirp.user.api.UserService",
  "user",
  {
    includeDirs: ["protos/user"],
  }
)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // We can't use the statically typed proto-js files here, because our SDK doesn't support it yet.
  .setInitial(() => authEntity.lookupType("js.chirp.user.domain.User").create())
  .setCommandHandlers({
    Register: (req, state, ctx) =>
      handleRequest({ ...req, type: RequestTypes.Register }, state, ctx),
    Login: (req, state, ctx) =>
      handleRequest({ ...req, type: RequestTypes.Login }, state, ctx),
  });

export default authEntity;
