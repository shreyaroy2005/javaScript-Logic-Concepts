//! 31.Write a function to find the first unique (nonrepeating) element in an array. (Medium) 
// Explanation: Loop through the array and count 
// occurrences of each element (using an object), then 
// loop again to find the first with count 1. 

let arr = [4,5,2,4,0,2];

function findFirstUnipueElem(arr){
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        console.log(x);
        count[x] = (count[x] || 0) + 1;
        
    }

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1) {
            return arr[i];
     }
    }
    return null;
}
console.log(findFirstUnipueElem(arr));
