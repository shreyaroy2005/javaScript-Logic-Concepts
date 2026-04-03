//! 23.Write a function that returns the type of a variable (e.g., 'string', 'number'). (Easy) 
// Explanation: Use the typeof operator on the 
// parameter and return the result. 

function checkTypeOf(type){
    let result = typeof type;
    return result;
}
console.log(checkTypeOf([2,3,4]));
console.log(checkTypeOf("ram"));

console.log(checkTypeOf(null));
console.log(checkTypeOf(20));
