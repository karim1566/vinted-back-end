const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
// const isAuthenticated = require("./middleware/isAuthenticated");

const app = express();
app.use(express.json());
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: "je te recois" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This routes doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("server has started");
});
