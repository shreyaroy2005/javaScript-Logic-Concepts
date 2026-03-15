//! check if a number is divisible by 5.

// step by step :-
// accept a number 
// if number ta 5 diye divisible kora jay tokhon true retun korbe
// else na hoy tahole false retun korbe.

let number = 10;

function checkDivisible(num){
    if(num % 5 === 0){
        return true;
    }else {
        return false;
    }
}

console.log(checkDivisible(number));
