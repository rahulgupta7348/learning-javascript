// function statement/declaration
/**Key Characteristics:
Hoisted: Function statements are hoisted, meaning they can be used before they are defined in the code.
Named function: The function always has a name. */
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1997);
console.log(age1);
*/
// function expression
//A function expression defines a function inside an expression. It can be either named or anonymous.
/**Key Characteristics:
Not Hoisted: Unlike function declarations, function expressions are not hoisted. You must define them before using them.
eg.
 sayHello(); // ❌ ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() {
    console.log("Hello!");
};
 
Can be Anonymous: Unlike function statements, function expressions can be unnamed. */
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age2);
*/

/**Arrow function
 *An arrow function is a shorter syntax for writing functions in JavaScript. It was introduced in ES6 and is commonly used for concise function expressions.

Syntax:
const functionName = (param1, param2) => {
    // Function body
    return result;
};
 for single line expression:
 const functionName = (param1, param2) => result;//Here, the return keyword is implicit.

 */

//function declaration

// function ageCalc(age) {
//   return 2037 - age;
// }
// const age = ageCalc(1990);
// console.log(age);

// //Arrow function
// const calcAge3 = (age) => 2037 - age;
// const age3 = calcAge3(1998);
// console.log(age3);

//function calling another function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitJuiceMaker(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  return `Juice is made from ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
}
console.log(fruitJuiceMaker(2, 3));
