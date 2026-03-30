//! 22.Write a function to flatten an array of arrays by one level. (Medium) 
// Explanation: Loop through the outer array; if an element is itself an array, loop through it and push its elements to a new array. 
// input = [[1,2], 6, [8,[9]],4];
// output = [1, 2, 6, 8, [9], 4]


let arr = [[1,2], 6, [8,9],4];
function flattenArrayOfArrayInOneLevel(arr){
    let newArr  = [];
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      if(Array.isArray(arr[i])){
       for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
       }
      }else{
        newArr.push(arr[i])
      }
    }
    return newArr;
}
console.log(flattenArrayOfArrayInOneLevel(arr));
