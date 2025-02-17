/*
    callback 지원 비동기 함수 사용
*/

fn01("param~~", function (error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("result:" + result);
});
// test: fail
fn01(null, function (error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("result:" + result);
});
console.log("wait....");
// 비동기 함수가 실행되는 동안 다른 작업을 수행한다.
