console.log("============[02] undefined");

var myVar1;
var myVar2 = undefined;
var myVar3 = null;
console.log(myVar1,myVar2); // undefined
console.log("============[03] var");

y = 10;
var x = 10;
function f(){

}

f();

console.log("============[05] undefined와 null의 동치(equal) 비교");

console.log(myVar1 == myVar2); // true
console.log(myVar1 === myVar2); 

console.log("============[06] Equal Operators(==, ===) 와 형변환");

console.log(1 == '1'); // true
console.log(false == 0); // true
console.log('abc == new String(abc)'); // true

// ===
// 1. 타입의 동일성
// 2. 타입이 동일한 경우
// 2-1. primitive type: 값의 동일성
// 2-2. object: 참조의 동일성
