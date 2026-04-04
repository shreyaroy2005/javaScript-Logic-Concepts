//! 19.Write a function that returns the index of a given element in an array (or -1 if not found). (Easy) 
// Explanation: Loop through the array and compare 
// each element to the target; return the index when 
// found, otherwise -1. 

let arr = [3,6,7,8,7];
let value = 6;

function FindTheIndexInTheArr(arr, value){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === value) {
        return i;
       }
    }
    return -1;
}
console.log(FindTheIndexInTheArr(arr,value));
