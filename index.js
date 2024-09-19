import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import client from "./src/services/Connection.js";
import config from "./src/commons/config.js";

import salgradeRouter from "./src/api/salgrade/index.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use("/salgrade", salgradeRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("Login berhasil");
});

// TODO: move routing with path /salgrade to new file

app.listen(config.app.port, () => {
  console.log(`Example app listening on port ${config.app.port}`);
});

client.connect((err) => {
  if (err) console.log(err.message);
  else console.log("Database connected");
});
