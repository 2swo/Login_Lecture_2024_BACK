"use strict";

const app = require("../app");
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.

// bin/www.js로 모듈화
app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});

// node app.js 가 아닌 node ./bin/www.js로 실행시켜야함
