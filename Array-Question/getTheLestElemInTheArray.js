//! 4. Write a function to get the last element of an array. (Easy) 
// Explanation: Return array[array.length - 1], which 
// accesses the last element of the array. 

let arr = [3,5,8,44];

function getLastElem(arr){
    return arr[arr.length - 1];
}
console.log(getLastElem(arr));
