// Section 01: 기본타입, primitive type
console.log("============[01] 기본타입, primitive type");
var u; // undefined
var i = 10; // number
var s = "hello world"; // string
var b = true; // boolean

console.log(u+i); // NaN
//var sum = j +20;

var n = null;
console.log(n+20); // 20

console.log("u:" + typeof(u) ); // undefined
console.log("i:" + typeof(i)); // number
console.log("s:" + typeof(s)); // string
console.log("b:" + typeof(b)); // boolean

// Section 02.01: 객체타입: object
console.log("============[02.01] 객체타입: object");
var i = new Number(10); // object
var s = new String("hello world"); // object
var b = new Boolean(true); // object
var f = new Function("x", "return x*x"); // object
var o = new Object(); // object
var a = new Array(); // object\
var n = null;

console.log("i:" + typeof(i) + " " +( i instanceof(Number) )); // object true
console.log("s:" + typeof(s) + " " +( i instanceof(String) )); // object false
console.log("b:" + typeof(b) + " " +( i instanceof(Boolean) )); // object false
console.log("f:" + typeof(f) + " " +( i instanceof(Function) )); // object false
console.log("o:" + typeof(o) + " " +( i instanceof(Object) )); // object true
console.log("a:" + typeof(a) + " " +( i instanceof(Array) )); // object false
console.log("n:" + typeof(n) + " " +( i instanceof(null) )); // object false    


// Section 02.02: 객체타입: function
console.log("============[02.02] 객체타입: function");

function f1() {
    // function declaration
}

var f2 = function() {
    // function expression
}

var f3 = new Function(); // function constructor

console.log("f1:" + typeof(f1)); // function
console.log("f2:" + typeof(f2)); // function
console.log("f3:" + typeof(f3)); // function

// Section 06: 기본타입과 유사객체
console.log("============[06] 기본타입과 유사객체");

var b1 = true;
var b2 = new Boolean(true);

console.log("b1:" + typeof(b1)); // boolean
console.log("b2:" + typeof(b2)); // object
