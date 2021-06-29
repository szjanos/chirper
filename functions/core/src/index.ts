const { EventSourcedEntity } = require('@lightbend/akkaserverless-javascript-sdk');

const entity = new EventSourcedEntity(
  ['api.proto', 'domain.proto'],
  'js.chirp.api.ChirpService',
  'user-chirps',
  {
    includeDirs: ['proto'],
  },
);

const pkg = 'js.chirp.domain.';
const Chirped = entity.lookupType(`${pkg}Chirped`);
const Liked = entity.lookupType(`${pkg}Liked`);
const UserChirps = entity.lookupType(`${pkg}UserChirps`);

entity.setInitial((userName) => UserChirps.create({ userName, chirps: [] }));

/*
 * Set a callback to create the behavior given the current state. Since there is no state
 * machine like behavior transitions for our shopping cart, we just return one behavior, but
 * this could inspect the cart, and return a different set of handlers depending on the
 * current state of the cart - for example, if the cart supported being checked out, then
 * if the cart was checked out, it might return AddItem and RemoveItem command handlers that
 * always fail because the cart is checked out.
 *
 * This callback will be invoked after each time that an event is handled to get the current
 * behavior for the current state.
 */
entity.setBehavior((userChirps) => ({
  // Command handlers. The name of the command corresponds to the name of the rpc call in
  // the gRPC service that this entity offers.
  commandHandlers: {
    Chirp: chirp,
    Like: like,
    GetUserChirps: getUserChirps,
  },
  // Event handlers. The name of the event corresponds to the (unqualified) name of the
  // persisted protobuf message.
  eventHandlers: {
    Chirped: chirped,
    Liked: liked,
  },
}));

/**
 * Handler for add item commands.
 */
function chirp(chirpRequest, userChirps, ctx) {
  const chirped = Chirped.create({
    chirp: {
      chirpId: `${Date.now()}`,
      text: chirpRequest.text,
      likes: 0,
    },
  });
    // Emit the event.
  ctx.emit(chirped);
  return {};
}

/**
 * Handler for remove item commands.
 */
function like(likeRequest, userChirps, ctx) {
  // Validation:
  // Check that the item that we're removing actually exists.
  const existing = userChirps.chirps.find(({ chirpId }) => chirpId === likeRequest.chirpId);

  // If not, fail the command.
  if (!existing) {
    ctx.fail('Like filed!');
  } else {
    // Otherwise, emit an item removed event.
    const liked = Liked.create({
      chirpId: likeRequest.chirpId,
    });
    ctx.emit(liked);
    return {};
  }
}

/**
 * Handler for get cart commands.
 */
function getUserChirps(request, userChirps) {
  // Simply return the shopping cart as is.
  return userChirps;
}

/**
 * Handler for item added events.
 */
function chirped(chirpedEvent, userChirps) {
  userChirps.chirps.unshift(chirpedEvent.chirp);
  return userChirps;
}

/**
 * Handler for item removed events.
 */
function liked(likedEvent, userChirps) {
  // userChirps.chirps = userChirps.chirps.map(chirp => {
  //     if (chirp.chirpId === likedEvent.chirpId) {
  //         return {
  //             ...chirp,
  //             likes: chirp.likes + 1
  //         }
  //     }
  //     return chirp
  // });

  userChirps.chirps.forEach((chirp) => {
    if (chirp.chirpId === likedEvent.chirpId) {
      chirp.likes += 1;
    }
  });

  return userChirps;
}

entity.start();
