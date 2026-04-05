//! 34.Write a function to chunk an array into smaller arrays of size N. (Medium) 
// Explanation: Loop through the array in steps of N, 
// using slice to extract chunks of length N and 
// pushing them into a result array. 

let arr = [1,2,3,4,5];
function chunkArrIntoSmallerArr(arr,n){
    let result = [];
    for (let i = 0; i < arr.length; i+=n) {
        // i kothay theke shuru korbo n hoche koyti element nebo i + n mane kothay giye thamte hobe.
       let chunk = arr.slice(i, i + n);
       result.push(chunk);
    }
    return result;
}
console.log(chunkArrIntoSmallerArr(arr, 3));
