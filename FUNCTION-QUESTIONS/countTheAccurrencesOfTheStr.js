//! 32.Write a function that counts the occurrences of a character in a string. (Easy) 
// Explanation: Loop through the string and increment a count each time the target character is encountered. 

let arr = ["ram", "sita", "modhu"];
let target = "a";

function checkCharacterInStr(arr, target){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
       for (let j = 0; j < arr[i].length; j++) {
       console.log(arr[i][j]);
        if (arr[i][j] === target) {
          count ++  
        }
       }
    }
    return count;
}
console.log(checkCharacterInStr(arr, target));
