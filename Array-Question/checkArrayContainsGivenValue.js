//! 10.Write a function to check if an array contains a given value. (Easy) 
// Explanation: Loop through the array and compare 
// each element to the target value, returning true if 
// found. 

let arr = [2,6,5,4];
let value = 6;

function checkTargetValueIsExistInArr(arr,value){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(checkTargetValueIsExistInArr(arr,value));
