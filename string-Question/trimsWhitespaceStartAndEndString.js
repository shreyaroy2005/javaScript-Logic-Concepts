//! 5. Write a function that trims whitespace from the start and end of a string. (Easy) 
// Explanation: Use the trim() method to remove 
// leading and trailing whitespace. 

let str = "   hi   ";

function trimStr(str){
    console.log(str);
    let trim = str.trim();
    console.log(trim);
    
    return trim;
}
console.log(trimStr(str));
