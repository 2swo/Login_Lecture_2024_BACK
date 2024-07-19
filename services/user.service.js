"use strict";

const users = {
  // static - 정적 속성 : 클래스 인스턴스인 UserRepository 자체에 속하는 데이터
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};
class UserService {
  //Class와 const의 차이점
  //1. const는 단일 객체나 값을 지정하지만, Class는 여러 객처를 생성하기 위한 템플릿이다.
  //2. 변수 (const)는 값을 직접 저장하지만, 클래스는 객체의 구조와 동작을 정의합니다.

  login = (id, pw) => {
    // loginService -> login 으로 일단변경
    const userIndex = users.id.indexOf(id);
    // indexOf: 배열에서 주어진 값의 첫 번째 인덱스를 반환. 값이 없으면 -1 반환
    // console.log(userIndex); 직접 보여주기

    if (userIndex === -1) {
      return { success: false, msg: "ID가 틀렸습니다." };
    }
    if (users.pw[userIndex] !== pw) {
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: true, msg: "로그인 성공" };
  };
}

module.exports =
  // 이후에 나머지 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  UserService;
