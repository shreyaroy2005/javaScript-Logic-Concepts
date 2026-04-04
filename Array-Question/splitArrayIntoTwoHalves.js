//! 30.Write a function to split an array into two halves. (Easy) 
// Explanation: Use slice(0, mid) and slice(mid) to 
// divide the array, where mid is half the array’s 
// length. 
//Input arr = [2,4,5,6];
//output = [[2,4],[5,6]]

let arr = [3, 4, 5, 6]
function splitArrayTwoHalves(arr) {
    let mid = arr.length / 2;
    let firstHalf = arr.slice(0, mid);
    let lastHalf = arr.slice(mid);
    return [firstHalf, lastHalf]
}
console.log(splitArrayTwoHalves(arr));
