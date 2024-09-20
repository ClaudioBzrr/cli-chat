import { IDBDefault } from "./generated/DBDefault";

export type IMessage = IDBDefault & {
  emmiterId: string;
  receiverId: string;
};
