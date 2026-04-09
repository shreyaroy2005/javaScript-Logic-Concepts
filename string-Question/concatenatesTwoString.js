//! 2. Write a function that concatenates two strings. (Easy) 
// Explanation: Use the + operator or .concat() method 
// to join the two strings. 

let str1 = "hello";
let str2 = "world";
function concatenatesTwoStr(str1, str2){
    let margeStr = str1 + str2;
    // let margeStr = str1.concat(str2);
    return margeStr;
}
console.log(concatenatesTwoStr(str1, str2));
