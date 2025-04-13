import { app } from "./server";
import { normalizePort } from "./utils/normalize";
import dotenv from "dotenv";
import https from "https";
import http from "http";
import { mongoStart,onServerError } from "./helpers";
import * as fs from "fs";
 

dotenv.config();
const { HTTP_PORT, CERT_KEY_DEVELOP_PATH, CERT_DEVELOP_PATH } = process.env;
var options = {
  key: fs.readFileSync(CERT_KEY_DEVELOP_PATH || ""),
  cert: fs.readFileSync(CERT_DEVELOP_PATH || ""),
};

const httpServer = http.createServer(app);
const httpPort = normalizePort(HTTP_PORT || "80");

(async () => {
  try {
    await mongoStart();
    httpServer.listen(httpPort, async function () {
      console.log("Express http server listening on port " + httpPort);
    });
    httpServer.on("error", onServerError);
  } catch (err) {
    console.log(err);
  }
})();
