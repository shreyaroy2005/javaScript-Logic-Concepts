//! 27.Write a function that removes duplicates from an array and returns the new array. (Medium) 
// Explanation: Loop through the array, and for each element, use a set or new array to track unique values, only add unseen elements. 

let arr = [0,1,0,5,3,5,1]
function removesDuplicatesArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      //  console.log(arr[i]);
        if(!newArr.includes(arr[i])){
            console.log(arr[i]);
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(removesDuplicatesArr(arr));


//! set methods diye 
let arr2 = [1,3,3,1,5,7];

let x = [...new Set(arr2)];
console.log(x);
