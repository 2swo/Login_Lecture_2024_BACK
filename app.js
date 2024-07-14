"use strict";

const express = require("express"); // 다운로드받은 express를 가져옴.
const app = express(); // express 모듈의 function을 사용하여 새로운 express 앱을 만들겠다고 선언.
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.

app.get("/", (req, res) => {
  // 프로젝트 루트 경로, 즉 /에 오면 Hello World를 출력.
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  //로그인 get 요청이 들어올 경우, 직접 가동 후 url을 통해 보여주기.
  res.send("여기는 로그인 페이지입니다.");
});

app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});
