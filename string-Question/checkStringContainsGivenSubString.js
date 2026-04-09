//! 9. Write a function to check if a string contains a given substring. (Easy) 
// Explanation: Use the includes(substring) method or 
// indexOf to test if the substring is found. 

let str = "hello";

function checkSubString(str){
     return str.includes("r");
    //return str.indexOf("e")
}
console.log(checkSubString(str));
