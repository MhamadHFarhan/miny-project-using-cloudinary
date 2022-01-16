const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
