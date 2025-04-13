// == does type coercion while === does not.

// const age = 18;
// if(age===18){
//   console.log('You just became an adult : D (strict)');
// }
// if(age==18){
//   console.log('You just became an adult : D (loose)');
// }

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ //23 === 23 true
  console.log('Cool! 23 is an amazing number!');
}else if(favourite === 7){
  console.log('7 is also a cool number');
}else{
  console.log("Number is not 23 or 7");
}