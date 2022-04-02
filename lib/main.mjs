import { DYNAMIC_ROUTER_PATH } from "./config.mjs";
import { Server } from "./server.mjs";
import fs from "fs";

export function main() {
  const server = new Server();
  server.start()

  if (DYNAMIC_ROUTER_PATH) {
    fs.watchFile(DYNAMIC_ROUTER_PATH, () => {
      console.log(`File ${DYNAMIC_ROUTER_PATH} changed, reloading...`);
      server.restart();
    });
  }
}
