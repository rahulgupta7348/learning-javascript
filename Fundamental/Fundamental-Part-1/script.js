// Variable
// 1. Variable can't be start with a number e.g  let 4Number ;
// 2. but we can declare variable starting with _ or $ symbol.

// let number = 5;
// console.log(number);
// console.log("Hello Dev");

// let $firstName ="Hello";
// let _secondName ="Gupta";

// console.log($firstName +" "+ _secondName);

// const PI = 3.175;
// console.log(PI);

// Data Types

// the 7 primitive data types

// 1.Number: floating point numbers used for decimals and integers
// let age = 27;
// console.log(age);

// 2.String: sequence of characters and it's  used for text.
// let greetings = "Radhe Radhe";
// console.log(greetings);

// 3.Boolean: logical type that can only be true or false.Used for taking decisions
// let fullAge = true;
// console.log(fullAge);

// 4.Undefined: value taken by a variable that is not yet defined(empty value).
// let unDefinedVal;

//5.Null: also means "empty value".
//6.Symbol(ES2015):Value that is unique and cannot be changed[not useful for now].

//7.BigInt(ES2020):larger integers than the number type can hold.

// Notes: JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically. Value has type,Not variable.

// let isJavaScriptFun =true;
// console.log(isJavaScriptFun);
// console.log(typeof true);
// console.log(typeof isJavaScriptFun);
// console.log(typeof 23);
// console.log(typeof 'radhe')
// isJavaScriptFun = 'yes!';
// console.log(typeof isJavaScriptFun)
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1990;
// console.log(typeof year);

//existing bug in javascript
// console.log(typeof null);output : object

/*
let age = 30;
age = 35;
console.log(age);
*/
/*
const birthYear = 1999;
birthYear = 1990;//script.js:68 Uncaught TypeError: Assignment to constant variable.
console.log(birthYear);
*/
/*
var job = "Developer";
job = "Tester";
console.log(job);//output:Tester
*/
/*
Note: When we create a variable without using let, var, const then it will act as a property in global scope.
lastName ="Gupta";
console.log(lastName);
*/
