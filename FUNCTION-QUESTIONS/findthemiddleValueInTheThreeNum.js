//!33.Write a function that returns the median of three numbers. (Medium) 
//Explanation: Use conditional statements or sort the three numbers to find the middle value (the one that is neither max nor min).

//step by step :- 
//akta function define korbo
// array modhe 3 te number diye sort kore choto theke boro kore.
// index 1 middle hobe seta retun korbo.

let arr = [2,7,5]
function findMiddleNum(arr){
    arr.sort((a, b) => a - b)
   let middle = arr[1];
   return middle;
}

console.log(findMiddleNum(arr));
