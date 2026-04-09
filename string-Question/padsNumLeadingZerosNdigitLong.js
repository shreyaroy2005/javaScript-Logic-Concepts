//! 26.Write a function that pads a number with leading zeros to make it N digits long. (Easy) 
// Explanation: Convert the number to a string and use 
// padStart(N, '0') or manually prepend zeros until the 
// length is N.

let num = 3;

function digitslong(num,length){
   return num.toString().padStart(length, "0");
}
console.log(digitslong(num, 2));
console.log(digitslong(8, 3));