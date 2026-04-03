//! 49.Write a function that returns the sum of all elements in an array. (Easy) 
// Explanation: Loop through the array, adding each 
// element to a running total, and return the total after 
// the loop. 

let arr = [3,4,5,1]
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum;
}
console.log(sum(arr));
