//! Write a function that checks if a number is even or odd. (Easy) 
// Explanation: Check the number modulo 2; if number % 2 === 0, it's even, else it's odd, and return the result.

function checkNumEvenOrOdd(num){
    if(num % 2 === 0){
        console.log("it's even number");
    }else{
        console.log("it's odd number");
        
    }
}
checkNumEvenOrOdd(5);