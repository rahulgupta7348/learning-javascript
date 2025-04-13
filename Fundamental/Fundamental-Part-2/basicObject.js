// const myObj = {
//   firstName: "Mukesh",
//   lastName: "Gupta",
//   age: 2037 - 1991,
//   job: "student",
//   friends: ["Rakesh", "Ramesh", "Suresh"],
// };

// console.log(myObj);

//Dot Notation
// console.log(myObj.firstName);
//bracket Notation
// console.log(myObj["lastName"]);

// const nameKey = "Name";
// console.log(myObj["first" + nameKey]);
// console.log(myObj["last" + nameKey]);

// console.log(myObj.'last'+nameKey);
//Uncaught SyntaxError: Unexpected string

// const interestedIn = prompt(
//   "What do you want to know about myObj? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn);

// if (myObj[interestedIn]) {
//   console.log(myObj[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

//we can add any value to an object by using dot as well as bracket notation

// myObj.location = "India";
// myObj.twitter = "@mukesh";

// console.log(myObj);

//Challenge
//myObj has 3 friends, and his best friend is called Rakesh

// console.log(
//   `${myObj.firstName} has ${myObj.friends.length} friends, and his best friend is called ${myObj.friends[0]}`
// );

const rakesh = {
  firstName: "Rakesh",
  lastName: "Gupta",
  birthYear: 1995,
  job: "Student",
  friends: ["Mahesh", "Suresh", "Niket"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - this.birthYear;
  },
};
console.log(rakesh.calcAge());

//access by bracket notation
console.log(rakesh["calcAge"]());
