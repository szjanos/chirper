// @ts-ignore
import { AkkaServerless } from "@lightbend/akkaserverless-javascript-sdk";
import coreEntity from "./src/core-entity";
import authEntity from "./src/auth-entity";

// @ts-ignore
new AkkaServerless().addComponent(coreEntity).addComponent(authEntity).start();
