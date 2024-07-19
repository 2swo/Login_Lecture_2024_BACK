"use strict";

class UserRepository {
  //더미데이터로 변경
  static users = {
    // static - 정적 속성 : 클래스 인스턴스인 UserRepository 자체에 속하는 데이터
    id: ["id1", "id2", "id3"],
    pw: ["pw1", "pw2", "pw3"],
  };
  //아니면 this로 하는 방법도 괜찮을듯..?

  findUserById(id) {
    // 클래스 인스턴스인 UserRepository에서 호출되는 메서드
    // 주어진 ID를 배열에서 찾고, 그 인덱스를 반환
    const userIndex = UserRepository.users.id.indexOf(id);
    // console.log(userIndex); // indexof 더 잘 설명하려고 눈에보이게 Log 찍어보기

    // userIndex가 -1이 아닌 경우 (사용자가 DB에 있는 경우)
    if (userIndex !== -1) {
      return {
        id: UserRepository.users.id[userIndex],
        pw: UserRepository.users.pw[userIndex],
      };
    } else {
      // userIndex가 -1인 경우 (사용자가 DB에 없는 경우)
      return undefined;
    }
  }
}

module.exports = UserRepository;
