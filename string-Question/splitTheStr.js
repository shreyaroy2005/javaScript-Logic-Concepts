//! 6. Write a function that splits a string by spaces into an array of words. (Easy) 
// Explanation: Use the split(' ') method to divide the 
// string at each space, producing an array of words.
let str = "hello World";

function splitStr(str){
    let split = str.split(" ");
    return split;
}
console.log(splitStr(str));
