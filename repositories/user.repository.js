"use strict";

const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

const findUserById = (id) => {
  // 클래스 인스턴스인 UserRepository에서 호출되는 메서드
  const userIndex = users.id.indexOf(id);

  if (userIndex !== -1) {
    return {
      id: users.id[userIndex],
      pw: users.pw[userIndex],
    };
  } else {
    return undefined;
  }
};

module.exports = {
  // 이후에 나머지 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  findUserById,
};
