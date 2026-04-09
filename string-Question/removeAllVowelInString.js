//! 16.Write a function that removes all vowels from a string. (Medium) 
// Explanation: Loop through or use regex to filter out 
// vowels and rebuild the string without them. 

let str = "shreya";

function removesVowelsInString(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
       if (str[i].toLowerCase() === "a"
         || str[i].toLowerCase() === "e" 
         || str[i].toLowerCase() === "i" 
         || str[i].toLowerCase() === "o" 
         || str[i].toLowerCase() === "u") {
            continue ;
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removesVowelsInString(str));
