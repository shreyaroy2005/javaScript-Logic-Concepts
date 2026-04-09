//! 18.Write a function to convert a string into an array of characters. (Easy) 
// Explanation: Use split('') to split the string into 
// individual characters.


let str = "hello";

function convertStrArrOfCharacters(str){
    return str.split("");
}
console.log(convertStrArrOfCharacters(str));
