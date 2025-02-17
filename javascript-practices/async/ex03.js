/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const { fn02 } = require("./fns");

//test:success
const fn = async () => {
  const result = await fn02("test"); //await는 결과를 낼 때 까지 기다린다. (작동은 비동기로)
  console.log("result:", result);
};

fn();

console.log("wait...");
