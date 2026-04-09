//! 15.Write a function that counts the number of vowels in a string. (Medium) 
// Explanation: Loop through the string and count 
// characters that match vowels (a, e, i, o, u). Return 
// the count. 

let str = "HELLO";

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        if (str[i].toLowerCase() === "a"
         || str[i].toLowerCase() === "e" 
         || str[i].toLowerCase() === "i" 
         || str[i].toLowerCase() === "o" 
         || str[i].toLowerCase() === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));
