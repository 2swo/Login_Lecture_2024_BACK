"use strict";

const express = require("express"); // 다운로드받은 express를 가져옴.
const app = express(); // express 모듈의 function을 사용하여 새로운 express 앱을 만들겠다고 선언.
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.
app.use(bodyParser.json()); // JSON 요청 본문 파싱 설정

const users = {
  //db 대신 user 데이터 예시
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;

  // ID와 비밀번호 입력 검증
  if (!id || !pw) {
    return res
      .status(400) // 400: 잘못된 요청 (Bad Request)
      .json({ success: false, msg: "ID와 비밀번호를 입력하세요." });
  }

  const response = await loginService(id, pw);

  if (response.success) {
    return res.status(200).json(response); // 200: 성공 (OK)
  } else {
    return res.status(400).json(response);
  }
});

// 서비스 로직
const loginService = (id, pw) => {
  const userIndex = users.id.indexOf(id);

  // indexOf: 배열에서 주어진 값의 첫 번째 인덱스를 반환. 값이 없으면 -1 반환
  if (userIndex === -1) {
    return { success: false, msg: "ID가 틀렸습니다." };
  }
  if (users.pw[userIndex] !== pw) {
    return { success: false, msg: "비밀번호가 틀렸습니다." };
  }
  return { success: true, msg: "로그인 성공" };
};

app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});
