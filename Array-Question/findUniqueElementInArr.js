//! 25.Write a function that finds the union of two arrays (all unique elements). (Medium) 
// Explanation: Combine both arrays and use a loop to build a new array, adding an element only if it isn’t already included. 

let arr1 = [1,2,3];
let arr2 = [2,3,4]
function findUniqueArr (arr1,arr2){
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      //console.log(arr1);
      if (!newArr.includes(arr1[i])) {
          console.log(arr1[i]);
          newArr.push(arr1[i])
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if(!newArr.includes(arr2[i])){
        console.log(arr2[i]);
        newArr.push(arr2[i])
      }
    }
    return newArr;
}

console.log(findUniqueArr(arr1, arr2));
