//!17.Write a function that returns a new array with all elements multiplied by 2. (Easy) 
// Explanation: Loop through the array and push 
// element * 2 into a new array, which is then returned. 

let arr = [9,6,4,3];

function multipliedTheArr(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
     newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(multipliedTheArr(arr));
