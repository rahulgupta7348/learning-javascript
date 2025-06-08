"use strict";
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     // console.log(str);
//     // console.log(millenial);
//   }
//   printAge();
//   return age;
// }
// const firstName = "Mukesh";
// calcAge(1990);

// Temporal Dead ZOne and hoisting practice

//variables
// console.log(name);
// console.log(job);
// console.log(salary);

// var name = "Mohit";
// let job = "Teacher";
// const salary = 23000;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };

// let addArr = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1;
// const y = 2;
// let z = 3;

// working functionality of "this" keyword
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// const mat = {
//   year: 2017,
// };

// //method borrowing
// mat.calcAge = jonas.calcAge;

// console.log(mat);
// console.log(mat.calcAge);

// const jonas = {
//   firstName: "Mahesh",
//   year: 1998,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet(); //Output: Hey undefined
// jonas.calcAge();

//arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 3, 5, 8);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 7, 5);

//Object References in Practice(Shallow vs Deep Copies).

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 28,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Peter");
// const marriedJessica = jessica;
// marriedJessica.lastName = "Devis";

console.log("Before :", jessica1);
console.log("After : ", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 29,
  family: ["Alice", "Bob"],
};

//Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "David";

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before :", jessica);
// console.log("After :", jessicaCopy);

//Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mathew");
jessicaClone.family.push("Matt");
console.log("Original :", jessica);
console.log("Clone :", jessicaClone);
