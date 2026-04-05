//!46.Write a function to delete all null or undefined values from an array. (Medium) 
// Explanation: Loop through the array and push only 
// non-null, non-undefined elements into a new array. 

let arr = [3,null,"hi",undefined,9];

function deleteAllNullOrUndefindValue(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null || arr[i] === undefined) {
            continue;
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(deleteAllNullOrUndefindValue(arr));
