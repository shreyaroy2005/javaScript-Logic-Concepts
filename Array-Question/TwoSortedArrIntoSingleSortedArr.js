//! 28.Write a function that merges two sorted arrays into a single sorted array. (Medium) 
// Explanation: Use two pointers to traverse both 
// sorted arrays, always picking the smaller current 
// element to add to the result array. 

let arr1 = [1,2,6];
let arr2 = [5,7,9];

function margeTwoSortedArrSingleArr(arr1, arr2){
    let i = 0;
    let j = 0;
    let newArr = [];
    
   while(i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]) {
        newArr.push(arr1[i])
        i++;
    }else{
        newArr.push(arr2[j])
        j++;
    }
   }

    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
     while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}
console.log(margeTwoSortedArrSingleArr(arr1,arr2));
