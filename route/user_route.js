const express = require("express");

const userRoute = express();

//body parser
const bodyParser = require("body-parser");
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));

//controller
const userController = require("../controller/user_controller");

//route
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);

module.exports = userRoute;
