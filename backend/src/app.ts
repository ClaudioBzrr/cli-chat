import { addAliases } from "module-alias";

addAliases({
  "@": __dirname,
});

import express from "express";
import { SERVER_PORT } from "./env";

const server = express();
server.listen(SERVER_PORT, () => {
  console.log(`Server running  on port ${SERVER_PORT}`);
});
