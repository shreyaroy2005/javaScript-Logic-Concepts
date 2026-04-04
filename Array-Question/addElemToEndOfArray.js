//! 5. Write a function to add an element to the end of an array. (Easy) 
// Explanation: Use push(element) on the array, which 
// appends the element to the end.

let arr = [3, 5, 6];

function addElemEndOfArr(arr) {
    arr.push(10);
    return arr;
    //OR
    // let newArr = [...arr, 10]
    // return newArr;
}

console.log(addElemEndOfArr(arr));
