//!45.Write a function that returns the number of digits in an integer. (Easy) 
// Explanation: Convert the number to a string and 
// return length, or loop dividing by 10 until the 
// number is 0, counting iterations. 

function digitsLength(n){
    return n.toString(2).length;
}
console.log(digitsLength(10));
