"use strict";

const express = require("express"); // 다운로드받은 express를 가져옴.
const app = express(); // express 모듈의 function을 사용하여 새로운 express 앱을 만들겠다고 선언.
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.
const mysql = require("mysql"); //mysql 가져옴

app.get("/", (req, res) => {
  // 프로젝트 루트 경로, 즉 /에 오면 Hello World를 출력.
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  //로그인 get 요청이 들어올 경우, 직접 가동 후 url을 통해 보여주기.
  res.send("여기는 로그인 페이지입니다.");
});

app.post("/register", (req, res) => {
  // 라우트딴
  //모듈을 나누기 전, 먼저 회원가입 API-POST를 app.js 파일 하나에 다 넣고, 하나씩 분리하면서 설명
  // 이렇게 길게 코드를 작성 할 경우, 간단하고 적은 설정과 빠른 개발을 할 수는 있지만.
  // 코드가 길어질수록 복잡해지고, 유지보수가 어렵습니다. 또한 코드의 재사용성이 떨어지고, 동일한 코드를 여러 곳에서 중복으로 사용할 가능성이 높아집니다.
  // 테스트의 어려움. 모든 로직이 한 파일이 있기 때문에, 버그가 발생했을때 원인을 찾기 어렵습니다.
  const { id, pw } = req.body; //컨트롤러딴,
  const db = mysql.createPool({
    // db 연결설정
    host: "localhost",
    user: "ex",
    password: "ex",
    database: "ex",
  });
  // + 사용자 존재 여부 확인같은 비즈니스 로직 = 서비스딴
  const sql = "INSERT INTO user (id, pw) VALUES (?,?);"; // 레포지토리딴
  try {
    db.query(sql, [id, pw]);
    return res.status(200);
  } catch (error) {
    console.log(error);
    return { success: false, msg: "회원가입 에러", res };
  }
});

app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});
