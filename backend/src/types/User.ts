import { IDBDefault } from "./generated/DBDefault";

export type IUser = IDBDefault & {
  name: string;
  email: string;
  password: string;
  lastLogin?: Date;
  contacts: Omit<IUser, keyof IDBDefault>;
};
