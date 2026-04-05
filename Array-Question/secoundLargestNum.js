//! 35.Write a function to find the second largest number in an array. (Medium) 
// Explanation: Loop through the array to track the 
// largest and second-largest values, updating them as 
// you find larger elements. 

let arr = [3, 5, 4, 8, 9, 2];

function findScoundLargestNum(arr) {
    let largest = -Infinity;
    let secondlargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            console.log(secondlargest);
            largest = arr[i];
            console.log(largest);
        }else if (arr[i] > secondlargest && arr[i] !== largest) {
            secondlargest = arr[i];
            console.log(secondlargest);
            
        }
    }
    return secondlargest;
}
console.log(findScoundLargestNum(arr));
