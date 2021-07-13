// WAP to swap a value of two numbers with third temp var and without temp var 

// With Temp Variable.

var a = 5;
var b = 10;
var temp;

console.log("Before Swap");
console.log("a : " + a);
console.log("b : " + b);
temp = a;
a = b;
b = temp;

console.log("After Swap With Temp");
console.log("a : " + a);
console.log("b : " + b);
// Without Temp variable.
b = a + b;
console.log("After Swap");
console.log("a : " + (a = (b-a)));
console.log("b : " + (b = (b-a)));