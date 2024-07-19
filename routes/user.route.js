"user strict";

const express = require("express");
const userRouter = express.Router(); // route

userRouter.post("/login", async (req, res) => {
  const { id, pw } = req.body;

  // ID와 비밀번호 입력 검증
  if (!id || !pw) {
    return res
      .status(400) // 400: 잘못된 요청 (Bad Request)
      .json({ success: false, msg: "ID와 비밀번호를 입력하세요." });
  }

  const response = await loginService(id, pw); // 변수명 변경 (result -> response)

  if (response.success) {
    return res.status(200).json(response); // 200: 성공 (OK)
  } else {
    return res.status(400).json(response); // 400: 잘못된 요청 (Bad Request)
  }
});

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

module.exports = userRouter; // export 해줘야 app.js에서 라우터 받아오기

//현재 고민중인것, index.js라는 route상위파일을 만들고, user.route.js파일은 하위파일로 만들어서, 각자의 route딴으로 넘기는것도 설명할가?
//최적화할것 : route.js라는 route딴 상위파일에서, user.route.js 하위파일로 두게 한다. 모든 route는 route.js에서 받아오고, app.js에서는 route.js만 참조한다
