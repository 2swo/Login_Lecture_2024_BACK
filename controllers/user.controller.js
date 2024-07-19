"use strict";

const users = {
  id: ["id1", "id2", "id3"],
  pw: ["pw1", "pw2", "pw3"],
};

// 컨트롤러의 역할
// 클라이언트의 요청을 수신, 검증하고 서비스딴 호출(비즈니스 로직), 응답 반환

const login = async (req, res) => {
  const { id, pw } = req.body;
  if (!id || !pw) {
    //id와 패스워드를 입력했는지 검증
    return res
      .status(400) //여기서 statuscode에 대한 간략한 설명
      .json({ success: false, msg: "ID와 비밀번호를 입력하세요." });
  }
  const response = await loginService(id, pw);

  const loginService = async (id, pw) => {
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
  // 컨트롤러의 역할
  // 클라이언트의 요청을 수신, 검증하고 서비스딴 호출(비즈니스 로직), 응답 반환
};

//controller에서 export 해줘서, route딴에서 쓰기.
module.exports = {
  // 이후에 로그인 api를 만들면서, 모듈을 묶어서 관리하는 방법도 소개하면서 변경될 예정
  login,
};
