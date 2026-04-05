//! 47.Write a function that checks if two arrays have any elements in common. (Medium) 
// Explanation: Use a loop: for each element in the 
// first array, check if it exists in the second (e.g., 
// includes). Return true if any match. 

let arr1 = [1,2,4,6];
let arr2 = [7,5,6,9];

function checkTwoArrHaveAnuCommonElem(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        return true; 
      }
    }
    return false;
}
console.log(checkTwoArrHaveAnuCommonElem(arr1,arr2));
