//! 18.Write a function that returns another function which adds a given number to its argument (closure). (Medium) 
// Explanation: Create a function that takes x and 
// returns a new function y => x + y. The inner 
// function adds the original x to its argument. 

function outer(x){
    return function inner(y){
        return x + y;
    }
}

let result = outer(5);
console.log(result(4));
