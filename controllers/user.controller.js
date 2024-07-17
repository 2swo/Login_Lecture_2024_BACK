"use strict";

const userService = require("../services/user.service");
//컨트롤러를 분리할 경우의 장점
//코드의 책임성 분리, 코드의 가독성 향상, 재사용성 향상

// 컨트롤러의 역할
// 클라이언트의 요청을 수신, 검증하고 서비스딴 호출(비즈니스 로직), 응답 반환

const register = async (req, res) => {
  const { id, pw } = req.body;
  const response = await userService.register(id, pw);
  return response;
};

//controller에서 export 해줘서, route딴에서 쓰기.
module.exports = {
  // 이후에 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  register,
};
