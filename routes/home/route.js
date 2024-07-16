"user strict";

const express = require("express");
const router = express.Router(); // route

router.post("/register", (req, res) => {}); //app -> route

module.exports = router; // export 해줘야 app.js에서 라우터 받아오기
