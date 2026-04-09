//! 47.Write a function to count uppercase and lowercase letters in a string. (Medium) 
// Explanation: Loop through the string and use a 
// regular expression or character comparison to check 
// if each character is upper or lower case, 
// incrementing separate counters. 

let str = "Hello World";

function conutUppcaseAndLowercase(str){
    let uppercase = 0;
    let lowercase = 0;
    for (let i = 0; i < str.length; i++) {
       console.log(str[i]);
       if (str[i] >= "A" && str[i] <= "Z") {
        uppercase++;
       }
        if (str[i] >= "a" && str[i] <= "z") {
        lowercase++;
       }
    }
    return {
        uppercase,
        lowercase,
    }
}
console.log(conutUppcaseAndLowercase(str));
