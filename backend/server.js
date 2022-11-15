const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/db");
const cors = require("cors");
dbConnect();
const app = express();

app.use(cors());
app.use(express.json()); // middleware to print json data
app.use(morgan("common"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.listen(8800, () => {
  console.log("Backend running...");
});
