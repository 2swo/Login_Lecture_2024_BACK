"use strict";

const userRepository = require("../repositories/user.repository");

//처음부터 class를 쓰지 말고, 이후에 로그인 API를 마저 만들면서 사용할지도 고민중
//class와 const의 차이점
//1. const는 단일 객체나 값을 지정하지만, class는 여러 객처를 생성하기 위한 템플릿이다.
//2. 변수 (const)는 값을 직접 저장하지만, 클래스는 객체의 구조와 동작을 정의합니다.

//인스턴스와 메서드란? -> JS에서는 인스턴스는 함수를 호출하는 객체가 있으면 메소드라고 부르고, 없으면 함수라고 부름

const loginService = async (id, pw) => {
  // loginService -> login 으로 일단변경
  const user = userRepository.findUserById(id);

  if (!user) {
    return { success: false, msg: "ID가 틀렸습니다." };
  }
  if (user.pw !== pw) {
    // console.log("정확한 패스워드:", user.pw, "내가 입력한 패스워드:", pw);

    return { success: false, msg: "비밀번호가 틀렸습니다." };
  }
  return { success: true, msg: "로그인 성공" };
};

module.exports = {
  // 이후에 나머지 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  loginService,
};
