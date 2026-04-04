//! 16.Write a function to compute the average of numbers in an array. (Easy) 
// Explanation: Sum the elements (using a loop) and 
// divide by the array length. 

let arr = [3,5,6,7,8];

function findAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
  return sum / arr.length;
}
console.log(findAverage(arr));
