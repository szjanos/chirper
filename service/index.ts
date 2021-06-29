import {
  ValueEntity,
  AkkaServerless,
} from "@lightbend/akkaserverless-javascript-sdk";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import domain from "./generated/user/domain";
import api from "./generated/user/api";

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
    return Empty.create();
  }

  if (req.type === "Login") {
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
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        ),
      });
    }
    ctx.fail("Auth error!");
    return Empty.create();
  }

  ctx.fail("Unknown command!");
  return Empty.create();
};

// Setup
const userEntity: ValueEntity = new ValueEntity(
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
  .setInitial(() => userEntity.lookupType("js.chirp.user.domain.User").create())
  .setCommandHandlers({
    Register: (req, state, ctx) =>
      handleRequest({ ...req, type: "Register" }, state, ctx),
    Login: (req, state, ctx) =>
      handleRequest({ ...req, type: "Login" }, state, ctx),
  });

new AkkaServerless().addComponent(userEntity).start();
