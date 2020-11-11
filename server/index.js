const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get("/prices", (req, res) => {
  const price = Math.random() * (500000 - 200000) + 20000;
  res.send({ price });
});

app.listen(PORT, () => console.log("Server running"));
