//! 28.Write a function that checks if a string is empty or whitespace only. (Easy) 
// Explanation: Trim the string and check if the length is zero. 

function checkStrEmptyOrWhitespace(str){
    let trimStr = str.trim();
    console.log(trimStr);
    if (trimStr.length === 0) {
        return true;
    }else{
        return false;
    }
}
console.log(checkStrEmptyOrWhitespace("  hi "));
console.log(checkStrEmptyOrWhitespace("   "));