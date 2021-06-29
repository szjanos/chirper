import {
  ValueEntity,
  AkkaServerless,
} from "@lightbend/akkaserverless-javascript-sdk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import domain from "./protos/user/domain";
import api from "./protos/user/api";

const { User } = domain.js.chirp.user.domain;
const { Token } = api.js.chirp.user.api;
const { Empty } = api.google.protobuf;

type User = domain.js.chirp.user.domain.User;
type LoginRequest = api.js.chirp.user.api.LoginRequest & {
  type: "Login";
};
type RegistrationRequest = api.js.chirp.user.api.RegistrationRequest & {
  type: "Register";
};
type Context = ValueEntity.ValueEntityCommandContext;

// setup
const userEntity: ValueEntity = new ValueEntity(
  ["api.proto", "domain.proto"],
  "js.chirp.user.api.UserService",
  "user",
  {
    includeDirs: ["protos/user"],
  }
);

const UserProto = userEntity.lookupType(
  "js.chirp.user.domain.User"
) as unknown as typeof User;

const TokenProto = userEntity.lookupType(
  "js.chirp.user.api.Token"
) as unknown as typeof Token;

const EmptyProto = userEntity.lookupType(
  "google.protobuf.Empty"
) as unknown as typeof Empty;

const SALT_ROUNDS = 10;

const handleRequest = async (
  req: RegistrationRequest | LoginRequest,
  state: User,
  ctx: Context
) => {
  if (req.type === "Register") {
    if (state.userName) {
      ctx.fail("User already exists!");
    }
    const hash = await bcrypt.hash(req.password, SALT_ROUNDS);
    state.userName = req.userName;
    state.password = hash;
    ctx.updateState(state);
    return EmptyProto.create();
  }

  if (req.type === "Login") {
    if (!state.userName || state.userName !== req.userName) {
      ctx.fail("Auth error!");
    }

    const passwordMatch = await bcrypt.compare(req.password, state.password);

    if (passwordMatch) {
      return TokenProto.create({
        value: jwt.sign(
          {
            user: state.userName,
          },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        ),
      });
    }
    ctx.fail("Auth error!");
    return EmptyProto.create();
  }

  ctx.fail("Unknown command!");
  return EmptyProto.create();
};

userEntity
  .setInitial(() => UserProto.create({}))
  .setCommandHandlers({
    Register: (req, state, ctx) =>
      handleRequest({ ...req, type: "Register" }, state, ctx),
    Login: (req, state, ctx) =>
      handleRequest({ ...req, type: "Login" }, state, ctx),
  });

new AkkaServerless().addComponent(userEntity).start();
