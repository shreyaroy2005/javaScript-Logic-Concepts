//! 7. Write a function to check if a string starts with a given substring. (Easy) 
// Explanation: Use the startsWith(substring) method 
// to return true if the string begins with that 
// substring.

let str = "kalkata";

function checkStringStartsGivenSubString(str){
    return str.startsWith("kal");
}
console.log(checkStringStartsGivenSubString(str));
