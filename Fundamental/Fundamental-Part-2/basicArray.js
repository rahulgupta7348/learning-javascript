// const friend1 = "Abhishek";
// const friend2 = "Saurabh";
// const friend3 = "Rajdeep";

// const friends = ["Abhishek", "Saurabh", "Rajdeep"];
// console.log(friends);
// console.log(friends.length);

// let friend = new Array("Abhishek", "Saurabh", "Rajdeep", "rahul");
// console.log(friend);

// console.log(friend[friend.length - 1]);

// friend[2] = "Madhushudhan";
// console.log(friend);

// friend = ["raj", "ravi"];
// console.log(friend);

// Basic Array Method

const friends = ["Abhishek", "Saurabh", "Rajdeep"];
friends.push("Abhay"); //to add an element at the end of array
console.log(friends);

const returnByPushMethod = friends.push("Shyam");
console.log(returnByPushMethod); //push method returns the length of new array.

friends.pop(); //it will delete the last element from the array and it will return that element.
console.log(friends);

//to add element at the starting of array
friends.unshift("Mukesh");
console.log(friends);

//to remove the element from starting of the array.
friends.shift();
console.log(friends);

if (friends.includes("Abhishek")) {
  console.log("You have a friend called Abhishek");
}
