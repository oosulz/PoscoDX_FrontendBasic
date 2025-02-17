/*
    promise 지원 비동기 함수 사용 I: ~ then ~ catch 
*/
const { fn02 } = require("./fns"); // fns 모듈에서 필요한 함수를 불러온다.

fn02(null)
  .then((result) => {
    console.log("result:", result);
  })
  .catch((error) => {
    console.error("error:", error);
  });

console.log("wait...");
