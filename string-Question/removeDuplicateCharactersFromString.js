//! 21.Write a function that removes duplicate characters from a string. (Medium) 
// Explanation: Loop through the string and use a new 
// string or set to build only unique characters. 

let str = "hello";

function removesDuplicateCharacter(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
       if (!newStr.includes(str[i])) {
        newStr += str[i];
       }
        
    }
    return newStr;
}
console.log(removesDuplicateCharacter(str));

// let result =[...new Set(str)];
// console.log(result);
