class User {
  db = {
    id: ["id1"],
    pw: ["pw1"],
  };
  user1(id, pw) {
    this.db.id = id;
    this.db.pw = pw;
  }

  user2(id, pw) {
    this.db.id = id;
    this.db.pw = pw;
  }
}

const users = new User("user1", "user2");
console.log(users);
