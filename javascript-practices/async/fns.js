/*
    비동기 함수
    1. fn01: callback 지원 비동기함수
    2. fn02: promise 지원 비동기함수
*/

exports.fn01 = function () {
  /*
       비동기 코드 ..... ex) file IO, network IO, database IO 
        callback 함수를 전달받아서 작업이 완료되면 callback 함수를 호출한다.
    */
  setTimeout(function () {
    console.log("fn01: some code running...");

    if (param != null) {
      // result:success
      callback(null, { result: "success" });
    } else {
      // result:fail
      callback(new Error("fail"), null);
    }
  }, 3000);
};

exports.fn02 = function (param) {
  return new Promise((resolve, reject) => {
    console.log("fn02: some code running...");

    setTimeout(function () {
      if (param != null) {
        // result:success
        resolve({ result: "success" });
      } else {
        // result:fail
        reject(new Error("fail"));
      }
    }, 3000);
  });
};
