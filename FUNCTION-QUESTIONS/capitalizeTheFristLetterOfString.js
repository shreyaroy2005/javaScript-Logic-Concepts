//! 21.Write a function to capitalize the first letter of a string. (Easy) 
// Explanation: Take the first character (str[0]), 
// convert it to uppercase, and concatenate it with the 
// rest of the string (starting from index 1). 

let str = "hello"
function capitalizeFirstLetter(str){
    let result = str[0].toUpperCase() + str.slice(1);
    return result;
}
console.log(capitalizeFirstLetter(str));
