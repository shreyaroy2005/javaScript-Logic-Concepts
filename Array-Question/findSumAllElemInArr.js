//! 15.Write a function to find the sum of all elements in an array. (Easy) 
// Explanation: Loop through the array adding each 
// element to a running total, and return the total. 

let arr = [3,7,9,100];

function sumOfTheElem(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        total += arr[i];
    }
    return total;
}
console.log(sumOfTheElem(arr));
