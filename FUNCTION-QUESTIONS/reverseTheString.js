//! 13.Write a function that reverses a string. (Easy) 
// Explanation: Split the string into characters or use a 
// loop from end to start to build a reversed string, 
// then return it. 

let str = "shreya";

function reverseTheSring(str){
    let newStr = "";
    for (let i = str.length -1; i >= 0; i--) {
         console.log(str[i]);
         newStr += str[i]
    }
    return newStr;
}

console.log(reverseTheSring(str));
