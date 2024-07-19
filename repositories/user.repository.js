"use strict";

const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

class UserRepository {
  findUserById(id) {
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
  }
}

module.exports = UserRepository;
