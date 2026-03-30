//! 24.Write a function that finds the intersection (common elements) of two arrays. (Medium) 
// Explanation: Loop through one array and use includes on the other to collect common elements. 

// input = arr1 = [2,3,5,7]; arr2 = [4,5,6,7];
//output = [5,7];

let arr1 = [2,3,5,7];
let arr2 = [4,3,6,7];
function findIntersectionOfTwoArr(arr1, arr2){
    let newArr = [];
   for(let i = 0; i < arr1.length; i++){
    //console.log(arr1[i]);
    if(arr2.includes(arr1[i])){
        newArr.push(arr1[i])
    }
   }
   return newArr;
}

console.log(findIntersectionOfTwoArr(arr1, arr2));
