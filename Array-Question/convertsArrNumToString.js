//! 44.Write a function that converts an array of numbers to their string representations. (Easy) 
// Explanation: Loop through the array and use 
// toString() or string concatenation to convert each 
// number to a string. 

let arr = [4,6,78,9];
function convertArrNumToString(arr){
    for (let i = 0; i < arr.length; i++) {
      arr[i] =  arr[i].toString();
    }
    return arr;
}
console.log(convertArrNumToString(arr));
