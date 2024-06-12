// Exercise 1: Numbers
let number = 42;
let floatingNumber = 3.14;

let addition = number + floatingNumber;
let subtraction = number - floatingNumber;
let multiplication = number * floatingNumber;
let division = number / floatingNumber;
let modulus = number % floatingNumber;
let exponentiation = number ** 2;

console.log(number);
console.log(floatingNumber);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Exercise 2: Boolean and Operators
let x = 8;
let y = 12;

let isGreater = x > y;
let isLessOrEqual = x <= y;
let isEqual = x == y;
let isNotEqual = x != y;

console.log("x > y:", isGreater);
console.log("x <= y:", isLessOrEqual);
console.log("x == y:", isEqual);
console.log("x != y:", isNotEqual);

let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

let p = 10;

p += 5;
console.log("p += 5:", p);

p -= 3;
console.log("p -= 3:", p);

p *= 2;
console.log("p *= 2:", p);

p /= 4;
console.log("p /= 4:", p);

p %= 3;
console.log("p %= 3:", p);
