//! 35.Write a function that adds a prefix to all strings in an array. (Easy) 
// Explanation: Loop through the array and for each 
// string, concatenate the prefix before it, storing or 
// logging the result. 

let arr = ["apple", "bannana", "mango"];
let prefix = "my-"

function addPrefix(arr, prefix){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let result = prefix + arr[i];
      newArr.push(result);

    }
    return newArr;
}
console.log(addPrefix(arr,prefix));
