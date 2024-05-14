//Problem for sorting an arrray

console.log("Problem is to sort an array");

const numbers = [67, 23, 7, 90, 2, 7, -9];
//this lines means it is a javascript function to sort an array
const rslt = numbers.sort((a, b) => a - b);

//and a,b means it is a arrow function which means in array there are no parameter a and and a-b means substract b from a from if negative
// come before b and if positive come after b
console.log(rslt);
