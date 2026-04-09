//! 41.Write a function that checks if a string is a valid palindrome (ignore non-letter characters and case). (Medium) 
// Explanation: Clean the string by removing non
// letters and changing to the same case, then check 
// palindrome by comparing to reverse.

function checkValidPalindrome(s){
    let CleanStr = s.split(" ").join("").toLowerCase();
    console.log(CleanStr);
    let revarceStr = CleanStr.split("").reverse().join("");
    console.log(revarceStr);
    if (revarceStr === CleanStr) {
        return true;
    }
    return false;
}
console.log(checkValidPalindrome("I Love racacar"));
