const express = require("express");
const controller = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", controller.addUser);
userRouter.post("/login", controller.loginUser);

module.exports = userRouter;
