const express = require("express");
const mongoose = require("mongoose");

const { PORT, MONGODB_CONNECTION_STRING } = require("./config");

const app = express();

mongoose.connect(
  MONGODB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) console.log(err);
    console.log("Conectado ao MongoDB!");
  }
);

app.use(express.json());

const router = require("./routes");

app.use(router);

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
