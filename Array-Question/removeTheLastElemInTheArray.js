//! 7. Write a function to remove the last element of an array. (Easy) 
// Explanation: Use pop() on the array, which removes 
// and returns the last element.

let arr = [20,40,60,44];

function removeLastElemInArr(arr){
    arr.pop();
    return arr;
}
console.log(removeLastElemInArr(arr));
