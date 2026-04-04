//! 8. Write a function to remove the first element of an array. (Easy) 
// Explanation: Use shift() on the array, which 
// removes and returns the first element. 

let arr = [3,5,8,9];

function removefirstElem(arr){
    arr.shift();
    return arr;
}
console.log(removefirstElem(arr));
