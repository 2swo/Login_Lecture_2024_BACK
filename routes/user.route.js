"user strict";

const express = require("express");
const userRouter = express.Router(); // route
const userController = require("../controllers/user.controller.js");

router.post("/register", userController.register);

module.exports = userRouter; // export 해줘야 app.js에서 라우터 받아오기
