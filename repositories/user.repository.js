"use strict";

const db = require("../config/db");
// const users = {
//   id: ["id1", "id2", "id3"],
//   pw: ["pw1", "pw2", "pw3"],
// };

const findUserById = (id, callback) => {
  // 데이터베이스에서 사용자 정보를 조회하는 쿼리
  const query = "SELECT id, pw FROM users WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return callback(err);
    }

    if (results.length > 0) {
      const user = results[0];
      return callback(null, { id: user.id, pw: user.pw });
    } else {
      return callback(null, undefined);
    }
  });
};

module.exports = {
  findUserById,
};
