const express = require("express");
const controller = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", function(req, res) {
  controller.addUser(req, res);
});
userRouter.post("/login", function(req, res) {
  controller.loginUser(req, res);
});

module.exports = userRouter;
