//! 11.Write a function to reverse an array in place. (Medium) 
// Explanation: Swap elements from the ends towards the middle using a loop; or use the built-in reverse() method.

let arr = [1,2,3];

function reverseTheArrInPlace(arr){
    let x = []
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
        x.push(arr[i])
    }
    return x;
}
console.log(reverseTheArrInPlace(arr));
