//! 2.Write a function that multiplies two numbers. (Easy) 
// Explanation: Define a function with two parameters and return the product using the * operator.

function multiplyTheNum(num1, num2){
    if (num2 === 0) return;
    let product = num1 * num2;
    return product;
}
let result = multiplyTheNum(2, 4);
console.log(result);
