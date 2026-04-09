//! 48.Write a function that checks if a string has all unique characters. (Medium) 
// Explanation: Use a set or an object to track seen 
// characters while looping. If any character repeats, 
// return false; otherwise return true. 

function checkAllUnipueCharacter(str){
    let newStr = new Set();
    for (let i = 0; i < str.length; i++) {
     if (newStr.has(str[i])) {
        return false;
     }else{
         newStr.add(str[i]);
     }
    }
    return true;
}
console.log(checkAllUnipueCharacter("hello"));
console.log(checkAllUnipueCharacter("abc"));