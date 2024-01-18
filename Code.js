function sayHello() {
  return function () {
    console.log("Hello🤣");
  };
}
//1
console.log(sayHello()());
//2
var x = sayHello();
x();

//carrying function
let sum = (a) => (b) => a + b;
sum(3)(4);
