//! 39.Write a function that prints each element of an array with its index. (Easy) 
// Explanation: Loop through the array (using index) 
// and print a message like Index i: element for each 
// item. 

let arr = [2,3,8,5]
function PrintIndexAndIndexElem(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(`index ${i}: ${arr[i]}`);
    }
}
console.log(PrintIndexAndIndexElem(arr));
