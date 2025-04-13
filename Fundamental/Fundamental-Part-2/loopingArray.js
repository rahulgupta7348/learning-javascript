// let raju = ["rakesh", "ramesh", "ravi", 1998];

// for (let i = 0; i < raju.length; i++) {
//   //reading from raju array
//   console.log(raju[i], typeof raju[i]);

//   //filling types array
//   raju[i] = typeof raju[i];
// }
// console.log(raju);/

// const years = [1997, 1965, 1980, 2000];
// let ages = [];

// for (let i = 0; i <= years.length - 1; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break
let raju = ["rakesh", "ramesh", "ravi", 1998, "shyam"];

// console.log("---------Only String----------");
// for (let i = 0; i < raju.length; i++) {
//   if (typeof raju[i] !== "string") continue;
//   console.log(raju[i], typeof raju[i]);
// }

// console.log("------Strings Before Number--------");
// for (let i = 0; i < raju.length; i++) {
//   if (typeof raju[i] === "number") break;
//   console.log(raju[i], typeof raju[i]);
// }

//0,1,....,4
//4,3,....,0
// reverse of an array
// for (let i = raju.length - 1; i >= 0; i--) {
//   console.log(`${i}`, raju[i]);
// }

//loop inside loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------Exercise Number ${exercise}------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`For ${exercise}, Number of repitition: ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`For Loop: Number of rep done ${rep}`);
// }

//while loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`While loop: Number of rep done ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6 + 1);
// while (dice !== 6) {
//   console.log(`Dice Rolled up ${dice}.`);
//   dice = Math.trunc(Math.random() * 6 + 1);
//   if (dice === 6) {
//     console.log(`Dice rolled up ${dice} and looks rolled end soon...`);
//   }
// }
