"use strict";

const express = require("express"); // 다운로드받은 express를 가져옴.

const app = express(); // express 모듈의 function을 사용하여 새로운 express 앱을 만들겠다고 선언.
const port = 3000; // port는 어플리케이션을 열 포트. 5000번 해도 되고 그럼. 이때 기본 port 설명을 할까말까.

// route 분리 연결
// 보다 명확한 분리를 사용하기 위해서, 명확한 폴더명, 파일명 중요.

const userRouter = require("./routes/user.route.js"); //이후에 코드 최적화를 하면서, 위치 정리 예정입니다.
app.use("/auth", userRouter); //추후 /api 로 변경 후, route딴에 상위 라우트 에서 하위 라우트로 분리예정입니다.

//라우터를 분리할 경우의 장점
// 협업의 효율성이 늘어남 (ex) - userRoute, boardRoute, 등등 각자가 맡은 작업의 Route딴을 분리
// 기능별로 분리된 라우터는 독립적으로 관리가 가능함. 코드 중복을 줄일 수 있음. (이부분은 login하면서 한번더 설명가능할듯)
// 코드의 가독성이 향상됨.

app.listen(port, () => {
  // console.log로 이 app이 몇번 포트에서 실행되는지.
  console.log(`서버 가동 ${port}`);
});
