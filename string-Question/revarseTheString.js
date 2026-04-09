//! 12.Write a function that reverses a string. (Medium) 
// Explanation: Split the string into an array of 
// characters, reverse the array, and join it back into a 
// string. 

let str = "hello";

function reverseTheString(str){
    let split = str.split("");
    console.log(split);
    let reverse = split.reverse();
    console.log(reverse);
    let join = reverse.join("");
    console.log(join);
    return join;
    
}
console.log(reverseTheString(str));
