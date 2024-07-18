"use strict";

const mysql = require("mysql"); // mysql 가져옴.

//db 연결 없이 더미데이터를가지고 테스트를 할지도 고민.
//db 연결 없이 더미데이터를 가지고 테스트를 하는 것으로 실행.
const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

// 모듈을 나누기 전, 먼저 회원가입 API-POST를 app.js 파일 하나에 다 넣고, 하나씩 분리하면서 설명
// 이렇게 길게 코드를 작성할 경우, 간단하고 적은 설정과 빠른 개발을 할 수는 있지만.
// 코드가 길어질수록 복잡해지고, 유지보수가 어렵습니다. 또한 코드의 재사용성이 떨어지고, 동일한 코드를 여러 곳에서 중복으로 사용할 가능성이 높아집니다.
// 테스트의 어려움. 모든 로직이 한 파일에 있기 때문에, 버그가 발생했을 때 원인을 찾기 어렵습니다.

const login = async (id, pw) => {
  if (!id || !pw) {
    //id와 패스워드를 입력했는지
    return res
      .status(400) //상태코드 간략한 설명
      .json({ success: false, msg: "ID와 비밀번호를 입력하세요." });
  }
  const userIndex = users.id.indexOf(id);
  // console.log(userIndex); //indexOf에 대한 간략한 설명 (배열에서 알맞은 값을 찾고 어떻게 반환하는지)
  if (userIndex === -1) {
    return res.status(400).json({ success: false, msg: "ID가 틀렸습니다." });
  }
  if (users.pw[userIndex] !== pw) {
    return res
      .status(400)
      .json({ success: false, msg: "비밀번호가 틀렸습니다." });
  }
  return { success: true, msg: "로그인 성공" };
};

module.exports = {
  // 이후에 나머지 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  login,
};
