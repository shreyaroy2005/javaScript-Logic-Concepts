//! 30.Write a function that counts words in a string. (Medium) 
// Explanation: Split the string by spaces (and possibly 
// filter out empty entries) and count the resulting 
// words. 

let str = "I love javaScript";

function countWordsStr(str){
    let split = str.split(" ");
   let countLength = split.length;
   return countLength;
}
console.log(countWordsStr(str));
