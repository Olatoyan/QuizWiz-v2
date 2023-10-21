import { Client, Databases, Account } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651bceaf587c4d764188");

export const account = new Account(client);
export const databases = new Databases(client, "6527523a068e2c0cb06f");
