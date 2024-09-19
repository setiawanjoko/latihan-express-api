import express from "express";
import bodyParser from "body-parser";
import client from "./src/services/Connection.js";
import cors from "cors";
import config from "./src/commons/config.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("Login berhasil");
});

app.get("/salgrade", (req, res) => {
  client.query("SELECT * FROM SALGRADE", (err, result) => {
    if (!err) res.send(result.rows);
    else res.send(err.message);
  });
});

app.get("/salgrade/:grade", (req, res) => {
    let { grade } = req.params
  client.query(
    `SELECT * FROM SALGRADE WHERE grade = ${grade}`,
    (err, result) => {
      if (!err) res.send(result.rows[0]);
      else res.send(err.message);
    }
  );
});

app.listen(config.app.port, () => {
  console.log(`Example app listening on port ${config.app.port}`);
});

client.connect((err) => {
  if (err) console.log(err.message);
  else console.log("Database connected");
});
