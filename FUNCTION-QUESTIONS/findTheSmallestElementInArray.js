//! 12.Write a function that finds the smallest element in an array. (Easy) 
// Explanation: Loop through the array keeping track 
// of the smallest value seen so far, and return that 
// value after the loop. 

let arr = [2,4,-1,8,6,1]
function findSmallestElement(arr){
    let x = Infinity;

    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
       
       if(arr[i] < x){
       x = arr[i];
       console.log(x);
       
       }

    }
    return x;
}
console.log(findSmallestElement(arr));
