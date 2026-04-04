//!1. Write a function to create an array with numbers from 1 to N. (Easy) 
// Explanation: Use a loop to push numbers from 1 up 
// to N into an array, then return that array.

let n = 10;

function createArr(n){
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        
    }
    return arr;
}

console.log(createArr(n));
