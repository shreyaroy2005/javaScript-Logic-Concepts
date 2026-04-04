//! 6. Write a function to add an element to the beginning of an array. (Easy) 
// Explanation: Use unshift(element) on the array, 
// which inserts the element at the start. 

let arr = [2,7,4,5];

function addElemBeginningOfArr(arr){
    arr.unshift(77);
    return arr;
}
console.log(addElemBeginningOfArr(arr));
