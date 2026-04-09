//! 20.Write a function to count the occurrences of a character in a string. (Easy) 
// Explanation: Loop through the string and increment 
// a counter each time you see the target character. 

let string = "hello World";
let value = "L";

function countTheTargetValue(str, value){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === value.toLowerCase()) {
            count++;
        }  
    }
    return count;
}
console.log(countTheTargetValue(string, value));
