console.log("============object 타입의 확장");
o.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log(this.age + ":" + this.name);
    }
};
o.another.print();

console.log("============function 타입의 확장");
f.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log(this.age + ":" + this.name);
    }
};
f.another.print();

console.log("============기본 타입(primitive type)은 확장되지 않는다");
var i1 = 10;
var i2 = new Number(20);
console.log(i1 + ":" + i2 + ":" + (i1 + i2));
i2.another = {
    name: "마이콜",
    age: 20
};
console.log(i2.another);
i1.another = {};            // new Number(i1).another = {};
console.log(i1.another);    // new Number(i1).another
