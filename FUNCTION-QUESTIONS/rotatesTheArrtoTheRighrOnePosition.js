//! 27.Write a function that rotates an array to the right by one position. (Easy) 
// Explanation: Use pop() to remove the last element 
// and unshift() to add it to the front of the array, then 
// return the modified array.

let arr = [1,2,3,4]
function rotatesArrOnePosition(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(rotatesArrOnePosition(arr));
