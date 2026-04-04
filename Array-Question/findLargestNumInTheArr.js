//! 13.Write a function to find the largest number in an array. (Easy) 
// Explanation: Loop through the array tracking the 
// maximum value found and return it.

let arr = [3,6,5,4]
function findLargestNum(arr){
    let largeValue = 0;
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > largeValue) {
        console.log(largeValue);
        console.log(arr[i]);
        largeValue = arr[i];
       }
    }
    return largeValue;
}
console.log(findLargestNum(arr));
