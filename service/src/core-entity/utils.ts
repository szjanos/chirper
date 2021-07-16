import { EventSourcedEntity } from "@lightbend/akkaserverless-javascript-sdk";
import { Chirped, Chirps, Liked } from "./index.types";

const domainPkg = "js.chirp.domain.";

const loadProtos = (entity: EventSourcedEntity) => ({
  ChirpsProto: entity.lookupType(`${domainPkg}Chirps`) as unknown as Chirps & {
    create: (props: Chirps) => Chirps;
  },
  ChirpedProto: entity.lookupType(
    `${domainPkg}Chirped`
  ) as unknown as Chirped & { create: (props: Chirped) => Chirped },
  LikedProto: entity.lookupType(`${domainPkg}Liked`) as unknown as Liked & {
    create: (props: Liked) => Liked;
  },
});

export default loadProtos;
