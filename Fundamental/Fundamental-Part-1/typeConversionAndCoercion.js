// type conversion
const inputYear = '1995';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Ramesh'));//output : NaN
console.log(typeof NaN); //output : number

console.log(String(23),23);

//type coercion
console.log('I am '+ 23 + ' year old');

console.log('23'-'10' -3); //first it will convert string into number implicitly and then do substraction.Output: 10.

//but if we do same with '+' then it will concatenate.
console.log('23'+'10'+3); //output:23103

console.log('23'*2); //output:46
console.log('24'/2); //output :12


let n = '1' +1;
n=n-1;
console.log(n);//output : 10.