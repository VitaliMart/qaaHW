// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
let number = 7;
let string = 'Hi';
let booleon = true;

let result = string + booleon;
let result1 = string + number;
let result2 = number + booleon;

console.log(`string + boolean = ${result}`);
console.log(`string + number = ${result1}`);
console.log(`number + boolean = ${result2}`);

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
let resMult = string * booleon;
let resMult1 = string * number;
let resMult2 = number * booleon;

console.log(`string * boolean = ${resMult}`);
console.log(`string * number = ${resMult1}`);
console.log(`number * boolean =  ${resMult2}`);

// 3. Divide different types (string / boolean, string / number, number / Boolean)
let resDiv = string / booleon;
let resDiv1 = string / number;
let resDiv2 = number / booleon;

console.log(`string / boolean = ${resDiv}`);
console.log(`string / number = ${resDiv1}`);
console.log(`number / boolean =  ${resDiv2}`);

// 4. Perform explicit conversion (number, string, boolean)
console.log(Number(booleon));
console.log(String(number));
console.log(Boolean(number));