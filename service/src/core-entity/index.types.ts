import { EventSourcedEntity } from "@lightbend/akkaserverless-javascript-sdk";
import domain from "../../generated/core/domain";
import api from "../../generated/core/api";

export enum EventType {
  Chirped = "Chirped",
  Liked = "Liked",
}

export enum CommandType {
  Chirp = "Chirp",
  Like = "Like",
  GetChirps = "GetChirps",
}

export type Chirps = domain.js.chirp.domain.Chirps;

export type Chirp = domain.js.chirp.domain.Chirp;

export type Chirped = domain.js.chirp.domain.Chirped & {
  type?: EventType.Chirped;
};

export type Liked = domain.js.chirp.domain.Liked & {
  type?: EventType.Liked;
};

export type ChirpRequest = api.js.chirp.api.ChirpRequest & {
  type: CommandType.Chirp;
};

export type LikeRequest = api.js.chirp.api.LikeRequest & {
  type: CommandType.Like;
};

export type GetChirpsRequest = api.js.chirp.api.GetChirpsRequest & {
  type: CommandType.GetChirps;
};

export type Context = EventSourcedEntity.EventSourcedEntityCommandContext;

export type Protos = {
  ChirpsProto: Chirps & {
    create: (props: Chirps) => Chirps;
  };
  ChirpedProto: Chirped & { create: (props: Chirped) => Chirped };
  LikedProto: Liked & {
    create: (props: Liked) => Liked;
  };
};
