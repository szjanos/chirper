import { ValueEntity } from "@lightbend/akkaserverless-javascript-sdk";
import domain from "../../generated/user/domain";
import api from "../../generated/user/api";

export type User = domain.js.chirp.user.domain.User;

export enum RequestTypes {
  Login = "Login",
  Register = "Register",
}

export type LoginRequest = api.js.chirp.user.api.LoginRequest & {
  type: RequestTypes.Login;
};

export type RegistrationRequest = api.js.chirp.user.api.RegistrationRequest & {
  type: RequestTypes.Register;
};

export type Context = ValueEntity.ValueEntityCommandContext;
