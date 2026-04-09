//! 39.Write a function that removes the last character from a string. (Easy) 
// Explanation: Use slice(0, -1) or similar to drop the 
// last character and return the new string.


let str = "hello";

function removesLastCharacterFromString(str){
    return str.slice(0,-1);
}
console.log(removesLastCharacterFromString(str));
