// Basic boolean logic operator: AND, OR &  Not 

//AND i.e. A AND B : true when ALL are true.
//OR i.e. A OR B : true when ONE is true.
// Not i.e Not A, Not B: inverts true/false value.

//logical operators

const hasDriversLicense = true; 
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
  console.log("Sarah is able to drive!");
}else{
  console.log("Someone else should drive...");
}