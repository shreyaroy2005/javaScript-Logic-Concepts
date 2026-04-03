//! 42.Write a function that merges two sorted arrays into one sorted array (merge step of merge sort). (Medium) 
// Explanation: Use two pointers to traverse both 
// arrays, comparing elements and pushing the smaller 
// into a result array until all elements are merged. 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function margeTowSortedIntoOneSortedArr(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }else{
            newArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++
    }

    return newArr;
}
console.log(margeTowSortedIntoOneSortedArr(arr1, arr2));
