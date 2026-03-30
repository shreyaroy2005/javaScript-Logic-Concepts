//! 23.Write a function to find the maximum sum of any contiguous subarray (Kadane’s algorithm). (Medium) 
// Explanation: Use a loop while tracking the current running sum and maximum sum found so far (reset running sum to 0 if it becomes negative).

// step by step :-
// frist function define korbo
// then currentValue nebo je pojonto sum ta hone
// mixsum nebo -infinity or arr ar frist element
//tarpor array modhe loop chalabo
// potekta array element ke sum kore add korte thakbo current value ar modhe.
//tarpor check korbo je current value jodi boro hoy maximum value theke tahole if condition ar modhe jabe maximumValue ke update korbe
//
let arr = [-1, 2, -1, -2, 4, 1];

function findMaximumSum(arr){
    let currentSum = 0;
    let maximum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
     currentSum = currentSum + arr[i];
     if(currentSum > maximum){
      //console.log(currentSum);
        maximum = currentSum;
     }
     if(currentSum < 0){
        currentSum = 0;
     }
    }
    return maximum;
}
console.log(findMaximumSum(arr));
