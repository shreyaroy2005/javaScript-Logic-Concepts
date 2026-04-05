//! 36.Write a function to get all indices of a given value in an array. (Medium) 
// Explanation: Loop through the array and collect 
// indexes where the element equals the target value. 

let arr = [2,3,4,5,3,8];
let value = 3;

function indicesCollectIndex(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === value) {
        newArr.push(i);
       }
    }
    return newArr;
}
console.log(indicesCollectIndex(arr));
