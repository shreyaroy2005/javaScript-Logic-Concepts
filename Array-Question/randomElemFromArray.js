//! 49.Write a function that returns a random element from an array. (Easy) 
// Explanation: Use Math.random() to pick a random 
// index (Math.floor(Math.random() * array.length)) 
// and return the element at that index.

let arr = [30,40,7,8,9,77];

function randomElemFromArr(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(randomElemFromArr(arr));
