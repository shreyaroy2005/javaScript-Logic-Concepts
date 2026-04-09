//! 29.Write a function that swaps the first and last character of a string. (Easy) 
// Explanation: Construct a new string with the last 
// character at the front, the middle unchanged, and 
// the first character at the end.

let str = "shreya";

function swapsTheFirstAndLastCharacter(str){
    let newStr = "";
    let lastCharacter = str[str.length - 1];
    let firstCharacter = str[0];
    let x = firstCharacter;
    firstCharacter = lastCharacter;
    lastCharacter = x;

    newStr = firstCharacter + str.slice(1, -1) + lastCharacter;
    return newStr;
    

}
console.log(swapsTheFirstAndLastCharacter(str));
