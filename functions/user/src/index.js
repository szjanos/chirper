const ValueEntity = require("@lightbend/akkaserverless-javascript-sdk").ValueEntity;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10

const entity = new ValueEntity(
    ["api.proto", "domain.proto"],
    "js.chirp.user.api.ChirpUserService",
    "user",
    {
        includeDirs: ["proto"]
    }
);

/*
 * Here we load the Protobuf types. When setting state, we need to return
 * protobuf message objects, not just ordinary JavaScript objects, so that the framework can
 * know how to serialize these objects when they are persisted.
 *
 * Note this shows loading them dynamically, they could also be compiled and statically loaded.
 */
const pkg = "js.chirp.user.domain.";
const User = entity.lookupType(pkg + "User");
const Token = entity.lookupType("js.chirp.user.api.Token");


/*
 * Set a callback to create the initial state. This is what is created if there is no
 * snapshot to load.
 *
 * We can ignore the cartId parameter if we want, it's the id of the entity, which is
 * automatically associated with all events and state for this entity.
 */
entity.setInitial(() => User.create());

/*
 * Command handlers. The name of the command corresponds to the name of the rpc call in
 * the gRPC service that this entity offers.
 */
entity.setCommandHandlers({
    Register: register,
    Login: login
});

function register(registrationRequest, user, ctx) {
    if (!!user.userName) {
        ctx.fail("User already exists!");
    }
    bcrypt.hash(registrationRequest.password, SALT_ROUNDS, function (err, hash) {
        ctx.updateState(User.create({
            userName: registrationRequest.userName,
            password: hash
        }));
    });
    return {};
}

async function login(loginRequest, user, ctx) {
    if (!user.userName) {
        ctx.fail("Auth error!");
    }
    bcrypt.compare(loginRequest.password, user.password, function (err, passwordMatch) {
        if (!passwordMatch || user.userName !== loginRequest.userName) {
            ctx.fail("Auth error!");
        }
        return Token.create({
            value: jwt.sign({
                user: user.userName,
            }, process.env.JWT_SECRET, {expiresIn: "1h"})
        });
    });
}

entity.start()