import { AkkaServerless } from "@lightbend/akkaserverless-javascript-sdk";
import authEntity from "./src/auth-entity";

new AkkaServerless().addComponent(authEntity).start();
