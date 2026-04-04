//!26.Write a function that checks if an array is sorted in ascending order. (Easy) 
// Explanation: Loop through the array checking if any 
// element is greater than the next; if so, return false; 
// else true. 

let arr = [3,5,9,1];

function checkArrSortedInAscendingOrder(arr){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > arr[i + 1]) {
        return false;
       }
    }
    return true;
}
console.log(checkArrSortedInAscendingOrder(arr));
