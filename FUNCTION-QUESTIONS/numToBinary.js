//! 44.Write a function that converts a number to its binary string representation. (Medium) 
// Explanation: You can use built-in toString(2) or 
// loop by dividing the number by 2 repeatedly and 
// constructing the binary digits. 

function binary(num){
    return num.toString(2);
}
console.log(binary(19));
