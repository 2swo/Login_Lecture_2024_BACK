const mysql = require("mysql");

const db = mysql.createConnection({
  host: "test",
  user: "test",
  password: "test",
  database: "test",
});

db.connect();

module.exports = db;
