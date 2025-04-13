'use strict';

//how to approach and solve any problem

//Problem:
/* We work for a company building a smart home thermometer. Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Approach To Solve Problem Using 4 Step Framework

/**
 1. Understanding the problem:
- What is temp amplitude?
Ans: differnce between highest and lowest temp.
- How to compute max and min temparatures?
- What's a sensor error? and what to do?

2. Breaking up into sub-problems
- How to ignore errors?
- find max value in temp array
- find min value in temp array
- subtract min from max (amplitude) and return it.
 */

// function calcTempAmplitude(temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(`The max value is ${max} and the min value is ${min}`);
//   return max - min;
// }

// let amplitute = calcTempAmplitude(temperatures);
// console.log('The amplitude was:', amplitute);

// Probleem 2: fucntion should now receive two arrays of temps
/**
1. Understanding the problem:
- With two arrays, should we implement functionality twice?
Ans: No! just merge two arrays

2. Breaking up into sub-problems
- Merge 2 arrays
 */
function calcTempAmplitude(temp1, temp2) {
  let temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(`The max value is ${max} and the min value is ${min}`);
  return max - min;
}

let amplitute = calcTempAmplitude([3, 5, 8], [9, 4, 0]);
console.log('the amplitude is:', amplitute);
