//! 29.Write a function to count how many times a given number appears in an array. (Easy) 
// Explanation: Loop through the array and increment 
// a counter each time the target number is 
// encountered. 

let arr = [6,7,8,3,-1,3,4]

let num = 3;

function countNum(arr,num){
    count = 0;
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] === num) {
        count++
     }
    }
    return count;
}
console.log(countNum(arr,num));
