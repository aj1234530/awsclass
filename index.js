const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong pong");
});

app.listen(4040);
