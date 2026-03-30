//! 12.Write a function to sort an array of numbers in ascending order without using the sort method. (Medium) 
// Explanation: Implement a simple sorting algorithm (like bubble sort): loop through the array repeatedly and swap adjacent elements if out of order. 

let arr = [5,2,1,3,8];
function SortTheArr(arr){
    for(let i = 0; i < arr.length; i++){
       // console.log(arr[i]);
     for (let j = 0; j < arr.length - i - 1; j++) {
       console.log(arr[j]);
       if (arr[j] > arr[j + 1]) {
        //console.log(arr[j]);
            let temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j + 1] = temp;
       }
     }
    }
    return arr;
}
let result = SortTheArr(arr);
console.log(result);

