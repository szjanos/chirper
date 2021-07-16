// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { AkkaServerless } from "@lightbend/akkaserverless-javascript-sdk";
import coreEntity from "./src/core-entity";
import authEntity from "./src/auth-entity";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
new AkkaServerless().addComponent(coreEntity).addComponent(authEntity).start();
