//!48.Write a function that prints all even numbers from an array. (Easy) 
// Explanation: Loop through the array and print each 
// element that is divisible by 2. This filters the array 
// for evens. 

let num = [9,6,4,2]
function evenNum (num){
    let arr = [];
    for (let i = 0; i < num.length; i++) {
         if(num[i] % 2 === 0){
            arr.push(arr[i]);
         }
    }
    return arr;
}

console.log(evenNum(arr));
