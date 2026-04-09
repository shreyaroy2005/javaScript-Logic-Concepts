//! 8. Write a function to check if a string ends with a given substring. (Easy) 
// Explanation: Use the endsWith(substring) method 
// to return true if the string ends with that substring.

let str = "kalkata";

function checkStringStartsGivenSubString(str){
    return str.endsWith("a");
}
console.log(checkStringStartsGivenSubString(str));