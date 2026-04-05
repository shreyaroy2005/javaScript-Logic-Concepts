//! 33.Write a function to rotate an array to the left by k positions. (Medium) 
// Explanation: Use splice and push or loops: remove 
// the first element and append it at the end, repeat 
// this k times.

let arr = [1, 2, 3, 4, 5];
let k = 3;
function rotateArrLeftPosition(arr, k) {
    for (let i = 0; i < k; i++) {
        let removeFirstElem = arr.shift();
        console.log(removeFirstElem);
        arr.push(removeFirstElem);
    }
    return arr;
}
console.log(rotateArrLeftPosition(arr, k));
