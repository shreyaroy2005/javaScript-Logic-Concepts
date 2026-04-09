//! 22.Write a function to check if a string contains only digits. (Easy) 
// Explanation: Use a loop or regex to verify each 
// character is between '0' and '9'.

let str = "12345";
function checkContainsOnlyDigits(str){
    if (str.length <= 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] < "0" || str[i] > "9") {
            return false;
        }
    }
    return true;
}
console.log(checkContainsOnlyDigits(str));
console.log(checkContainsOnlyDigits("12a65"));