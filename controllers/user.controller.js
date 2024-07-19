"use strict";

const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

// 컨트롤러의 역할
// 클라이언트의 요청을 수신, 검증하고 서비스딴 호출(비즈니스 로직), 응답 반환

const login = async (req, res) => {
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
    return res.status(400).json(response);
  }
};

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

// 컨트롤러의 역할
// 클라이언트의 요청을 수신, 검증하고 서비스딴 호출(비즈니스 로직), 응답 반환

//controller에서 export 해줘서, route딴에서 쓰기.
module.exports = {
  // 이후에 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  login,
};
