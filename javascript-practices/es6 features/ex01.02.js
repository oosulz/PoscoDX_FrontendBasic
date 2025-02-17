// 1. const 의 블록 범위
try {
  if (true) {
    const NUM = 10;
  }
  console.log(NUM); // ReferenceError: NUM is not defined
} catch (e) {
  console.error("error:" + e);
  // const는 블록단위 스코프를 가진다.
  // const는 재할당이 불가능하다.
}
// 2. 대입(Assignment) 에러
try {
  const NUM = 20;
  NUM = 30;
} catch (e) {
  console.error("error:" + e);
}
