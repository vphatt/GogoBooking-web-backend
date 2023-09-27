const express = require("express");
const app = express();

require("dotenv").config();

//mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://phatduongvgt:phatduong262@gogocluster.qkj1vsd.mongodb.net/phatduongvgt"
);

mongoose.connection.once("open", () => {
  console.log("mongoose connected");
});

// mongoose.connection.on("error", () => {
//   console.error.bind(console, "mongoose connection failed: ");
// });

mongoose.connection.on("error", () => {
  console.log("mongoose connection failed: " + error);
});

// //api
// app.use("/", (req, res) => {
//   res.send("HOME PAGE");
// });

//route
const user_route = require("./route/user_route");
app.use("/api", user_route);

//server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
