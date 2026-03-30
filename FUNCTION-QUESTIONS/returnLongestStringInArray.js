//!30.Write a function that returns the longest string in an array of strings. (Easy) 
// Explanation: Loop through the array tracking the longest string seen so far (by length), and return it after checking all. 

let arr = ["ram", "sita", "hunumanJi"];
function checkLongestStrInArr(arr){
    let newStr = "";
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        if(arr[i].length > newStr.length){
           newStr = arr[i]
        }
    }
    return newStr;
}
console.log(checkLongestStrInArr(arr));
