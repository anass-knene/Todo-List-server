const express = require("express");
const app = express();
const todoRoute = require("./routes/todoRoute");
const addRoute = require("./routes/addRoute");
const deleteRoute = require("./routes/deleteRoute");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.json());
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log(`successfully connected to the database!`))
  .catch((err) => console.log(`error: ${err}`));

app.use("/all", todoRoute);
app.use("/add", addRoute);
app.use("/delete", deleteRoute);

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
