//! 13.Write a function that checks if a string is a palindrome. (Medium) 
// Explanation: Compare the string to its reverse (use 
// the reversing method above) and return true if they 
// are the same.

let str = "racacar";

function checkTheStringIsPalindrome(str){
    for (let i = 0; i < str.length; i++) {
     console.log(str[i]);
    
     if (str[i] === str[str.length -i -1]) {
        console.log(str[i]);
        
        return true;
     }else{
        console.log(str[i]);
        
        return false;
     }
        
    }
}
console.log(checkTheStringIsPalindrome(str));
