//! 14.Write a function to find the smallest number in an array. (Easy) 
// Explanation: Loop through the array tracking the 
// minimum value found and return it.

let arr = [2,5,6,7,-1]
function findSmallestNum(arr){
    let smallestValue = Infinity;

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < smallestValue) {
        console.log(arr[i]);
        smallestValue = arr[i];
        console.log(smallestValue);
        
       }
    }
    return smallestValue;
}
console.log(findSmallestNum(arr));
