//! Write a function that checks whether a string is a palindrome. (Medium) 
//Explanation: Compare the string to its reverse (which can be obtained with a loop or built-in method) and return true if they match.

// step by step :- 
// function define korbo .
// function ta check korbe ke string ta palindrome kina. je word ke ulto korleo same hobe setai palindrome.
// akta variable ar modhe copy korebo string take sline mathods diye.
// tarpor string ar length obdi loop chalabo.
// tarpor string ar protite carector ar sathe copy kora string ta check korbo.
// original string a frist carector ar copy kora string a lest carectar check korbo jodi mele tahole true retun hobe hole false retun korbo.

function checkPalindrome(str){
    let copyStr = str.slice();
   // console.log(copyStr);
    
    for (let i = 0; i < str.length; i++) {
       //console.log(str[i]);
       //console.log(copyStr[i]);
       
       if(str[i] === copyStr[copyStr.length - i - 1]){
            return true;
       }else{
        return false;
       }
    }
    
}
console.log(checkPalindrome("madam"));
