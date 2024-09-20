import { addAliases } from "module-alias";

addAliases({
  "@": __dirname,
});

import express from "express";

const server = express();
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
