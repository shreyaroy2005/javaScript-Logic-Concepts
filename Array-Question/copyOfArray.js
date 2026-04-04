//!9. Write a function to copy an array (shallow copy). (Easy) 
// Explanation: Use slice() with no arguments or 
// spread syntax ([...]) to create a shallow copy of the 
// array. 

let arr = [3,5,7,8];

function copyArr(arr){
    // let newArr = arr.slice();
    // return newArr;
    //OR
    let newArr = [...arr];
    return newArr;

}
console.log(copyArr(arr));
