const age = 18;
age >= 18
  ? console.log("I like to drink milk🥛")
  : console.log("I like to drink Water💧");

const drink = age >= 18 ? "milk🥛" : "Water💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "milk🥛";
} else {
  drink2 = "Water💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
