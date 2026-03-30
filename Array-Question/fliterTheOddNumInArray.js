//! 18.Write a function that filters out (removes) all even numbers from an array. (Medium) 
// Explanation: Loop through the array and push only the odd numbers into a new array, effectively filtering out evens. 


let arr = [1, 3, 8, 7, 6];
function filterOutAllEvenNum(arr){
let newArr = [];
   for(let i = 0; i < arr.length; i++){
     if (arr[i] % 2 !== 0) {
        newArr.push(arr[i])
    }
   }
    return newArr;
}

console.log(filterOutAllEvenNum(arr));
