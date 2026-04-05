//! 39.Write a function to remove all instances of a value from an array. (Medium) 
// Explanation: Loop through the array and build a 
// new array containing only those elements that are 
// not equal to the given value. 
let arr = [1,2,4,3,2,5];
let value = 2;

function removeInstancesValueFromArr(arr, value){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
         //console.log(arr[i]);
        if (arr[i] !== value) {
            newArr.push(arr[i]);
        }  
    }
    return newArr;
}
console.log(removeInstancesValueFromArr(arr,value));
