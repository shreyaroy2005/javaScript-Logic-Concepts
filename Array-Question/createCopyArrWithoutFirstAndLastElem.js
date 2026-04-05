//! 48.Write a function to create a copy of an array without its first and last elements. (Easy) 
// Explanation: Use slice(1, -1) to create a new array excluding the first and last elements. 

let arr = [1,2,3,4,5];

function copyArrWithoutFirstAndLastElem(arr){
    let newArr = arr.slice(1,-1);
    return newArr
}
console.log(copyArrWithoutFirstAndLastElem(arr));
