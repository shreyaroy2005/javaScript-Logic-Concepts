//!2. Given an array, write code to find its length without using the length property. (Medium) 
// Explanation: Loop through the array until you reach an undefined index or catch an error, counting iterations; this mimics finding the length.

let arr = ["ram","sita"];

function countLength(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count ++;
    }
    return count;
}
console.log(countLength(arr));
