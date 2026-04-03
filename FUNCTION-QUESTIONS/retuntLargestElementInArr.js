//! 15.Write a function that returns the largest element in an array. (Easy) 
// Explanation: Loop through the array, tracking the 
// maximum value found. Return the largest value 
// after the loop. 

let arr = [2,4,-1,-8,8,9];

function findTheLargestNum (arr){
    let largest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
          console.log(arr[i]);
          if(arr[i] > largest){
            console.log(arr[i]);
            largest = arr[i];
          }
    }
    return largest;
}
console.log(findTheLargestNum(arr));
