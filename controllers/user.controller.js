"use strict";

const mysql = require("mysql"); // mysql 가져옴.

//db 연결 없이 더미데이터를가지고 테스트를 할지도 고민.
const db = mysql.createPool({
  // db 연결설정
  host: "localhost",
  user: "ex",
  password: "ex",
  database: "ex",
});

const sign = {
  register: async (req, res) => {
    // 모듈을 나누기 전, 먼저 회원가입 API-POST를 app.js 파일 하나에 다 넣고, 하나씩 분리하면서 설명
    // 이렇게 길게 코드를 작성할 경우, 간단하고 적은 설정과 빠른 개발을 할 수는 있지만.
    // 코드가 길어질수록 복잡해지고, 유지보수가 어렵습니다. 또한 코드의 재사용성이 떨어지고, 동일한 코드를 여러 곳에서 중복으로 사용할 가능성이 높아집니다.
    // 테스트의 어려움. 모든 로직이 한 파일에 있기 때문에, 버그가 발생했을 때 원인을 찾기 어렵습니다.
    const { id, pw } = req.body; // 컨트롤러딴

    // + 사용자 존재 여부 확인 같은 비즈니스 로직 = 서비스로직
    const checkUserSql = "SELECT * FROM user WHERE id = ?;";
    db.query(checkUserSql, [id], (err, results) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, msg: "DB 조회 중 에러 발생" });
      }
      if (results.length > 0) {
        return res
          .status(409)
          .json({ success: false, msg: "이미 존재하는 사용자입니다." });
      }

      // 사용자 추가 로직 (레포지토리딴)
      const sql = "INSERT INTO user (id, pw) VALUES (?,?);";
      db.query(sql, [id, pw], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ success: false, msg: "회원가입 에러" });
        }
        return res.status(200).json({ success: true, msg: "회원가입 성공" });
      });
    });
  },
};

module.exports = {
  sign,
};
