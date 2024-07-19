"use strict";

const express = require("express"); // 다운로드받은 express를 가져옴.
const app = express(); // express 모듈의 function을 사용하여 새로운 express 앱을 만들겠다고 선언.
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.

const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

app.post("/login", login);

const login = async (req, res) => {
  const { id, pw } = req.body;
  if (!id || !pw) {
    //id와 패스워드를 입력했는지 검증
    return res
      .status(400) //여기서 statuscode에 대한 간략한 설명
      .json({ success: false, msg: "ID와 비밀번호를 입력하세요." });
  }
  const response = await loginService(id, pw); // 변수명을 바꿀 필요 있을 것 같음.

  const loginService = (id, pw) => {
    const userIndex = users.id.indexOf(id);
    // console.log(userIndex); //indexOf에 대한 간략한 설명 (배열에서 알맞은 값을 찾고 어떻게 반환하는지)
    if (userIndex === -1) {
      return res.json({ success: false, msg: "ID가 틀렸습니다." });
    }
    if (users.pw[userIndex] !== pw) {
      return res.json({ success: false, msg: "비밀번호가 틀렸습니다." });
    }
    return { success: true, msg: "로그인 성공" };
  };

  if (response.success) {
    return res.status(200).json(response);
  }
};

app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});
