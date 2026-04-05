//!50.Write a function that calculates the dot product of two equal-length arrays of numbers. (Medium) 
// Explanation: Loop through both arrays, multiply 
// corresponding elements and sum the results. Return 
// the total. 

let arr1  = [1,2,-3];
let arr2 = [8,-4,9];

function calculatesDotProducts(arr1,arr2){
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        let total = arr1[i] * arr2[i]; 
        //console.log(total);
        
        sum = sum + total;
    }
    return sum;
}
console.log(calculatesDotProducts(arr1,arr2));

