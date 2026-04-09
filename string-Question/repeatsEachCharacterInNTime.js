//! 40.Write a function that repeats each character in a string N times. (Medium) 
// Explanation: Loop through each character and 
// append it N times to a new string. 

let str = "abc";
function repeatsCharacter(str, n){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      newStr += str[i].repeat(n);
    }
    return newStr;
}
console.log(repeatsCharacter(str, 3));
// console.log(repeatsCharacter(str, 5));