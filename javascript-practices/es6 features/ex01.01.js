/*
    let & const I

*/

try {
  if (true) {
    var i = 0;
    let j = 0;
    j = 20;
  }
  console.log(i);
  console.log(j); // ReferenceError: j is not defined
  // let은 블록단위 스코프를 가진다.
} catch (e) {
  console.error("error:" + e);
}
