//! 3. Write a function to convert a string to uppercase. (Easy) 
// Explanation: Use the toUpperCase() method on the 
// string to convert all characters to uppercase.

let str = "javascript"
function convertStrUppercase(str){
    let uppercase = str.toUpperCase();
    return uppercase;
}
console.log(convertStrUppercase(str));
