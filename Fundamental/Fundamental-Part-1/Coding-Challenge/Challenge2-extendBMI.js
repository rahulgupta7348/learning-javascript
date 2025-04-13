/**Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let bmiMark = BMI(massMark,heightMark);
let bmiJohn = BMI(massJohn,heightJohn);

function BMI(mass,height){
  return mass/(height**2);
}

if(bmiMark>bmiJohn){
  console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn}) `);
}else{
  console.log(`John's BMI(${bmiJohn}) is higher than Marks(${bmiMark})`);
}
