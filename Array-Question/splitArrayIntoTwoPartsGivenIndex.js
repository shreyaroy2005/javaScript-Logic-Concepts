//! 40.Write a function to split an array into two parts at a given index. (Easy) 
// Explanation: Use slice(0, index) and slice(index) to 
// split the array at the given index. 

let arr = [2, 4, 5, 6, 7, 8];

function splitArrayTowPartsGivenIndex(arr, index) {
    let firstPart = arr.slice(0, index);
    let scoundPart = arr.slice(index);
    // console.log(firstPart);
    // console.log(scoundPart);
    return [firstPart, scoundPart];
}
console.log(splitArrayTowPartsGivenIndex(arr, 2));
