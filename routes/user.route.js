"user strict";

const express = require("express");
const userRouter = express.Router(); // route
const userController = require("../controllers/user.controller.js");

router.post("/register", userController.registerController);

module.exports = userRouter; // export 해줘야 app.js에서 라우터 받아오기

//현재 고민중인것, index.js라는 route상위파일을 만들고, user.route.js파일은 하위파일로 만들어서, 각자의 route딴으로 넘기는것도 설명할가?
