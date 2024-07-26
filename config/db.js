"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", // 데이터베이스 서버 주소
  user: "root", // 데이터베이스 사용자 이름
  password: "password", // 데이터베이스 비밀번호
  database: "database_name", // 사용할 데이터베이스 이름
});

db.connect(); // 데이터베이스 연결 설정
module.exports = db;
