import express from "express";
import { nanoid } from "nanoid";

const app = express();

app.get("/", (_, res) => {
  res.set("x-req-id", nanoid(10));
  res.send("Hello World!");
});
app.listen(3000, () => console.log("Listening on 3000"));