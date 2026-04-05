//! 42.Write a function to rotate an array to the right by k positions. (Medium) 
// Explanation: Use splice and unshift or loops: 
// remove the last element and insert it at the front, 
// repeating k times. 

let arr = [1,2,3,4,5];

function rotateArrRightPosition(arr,k){
    for (let i = 0; i < k; i++) {
       let removeLastElem = arr.pop();
      console.log(removeLastElem);
      arr.unshift(removeLastElem);
       
    }
    return arr;
}
console.log(rotateArrRightPosition(arr,2));
