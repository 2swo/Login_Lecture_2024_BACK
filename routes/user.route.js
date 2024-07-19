"user strict";

const express = require("express");
const userRouter = express.Router(); // route

userRouter.post("/login", login);

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

module.exports = userRouter; // export 해줘야 app.js에서 라우터 받아오기

//현재 고민중인것, index.js라는 route상위파일을 만들고, user.route.js파일은 하위파일로 만들어서, 각자의 route딴으로 넘기는것도 설명할가?
//최적화할것 : route.js라는 route딴 상위파일에서, user.route.js 하위파일로 두게 한다. 모든 route는 route.js에서 받아오고, app.js에서는 route.js만 참조한다
