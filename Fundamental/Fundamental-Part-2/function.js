// function Developer() {
//   console.log("Hey Dev");
// }
//calling/running/invoking function
// Developer();

function juiceProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = juiceProcessor(3, 0);
console.log(`Apple ${appleJuice}`);
const orangeJuice = juiceProcessor(0, 6);
console.log(`Orange ${orangeJuice}`);
const mixJuice = juiceProcessor(4, 2);
console.log(`Apple and Orange ${mixJuice}`);
