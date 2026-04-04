//! 21.Write a function that concatenates two arrays into a new array. (Easy) 
// Explanation: Loop through each array and push its 
// elements into a result array (or use spread operator 
// [...]). 

let arr1 = [2, 6, 4];
let arr2 = [5, 8, 4];
function concatenatesTwoArr(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
        newArr.push(arr2[i])
    }
    return newArr;

}
console.log(concatenatesTwoArr(arr1, arr2));
