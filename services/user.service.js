"use strict";

//db 연결 없이 더미데이터를 가지고 테스트를 하는 것으로 실행.
const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

const login = (id, pw) => {
  // loginService -> login 으로 일단변경
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

module.exports = {
  // 이후에 나머지 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  login,
};
