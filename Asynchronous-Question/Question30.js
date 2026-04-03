//!30.Write a function that returns a Promise resolving to the sum of two numbers after a 2-second delay. (Medium) 
// Explanation: Return new Promise(resolve => 
// setTimeout(() => resolve(a + b), 2000)). Use .then 
// or await to get the result.

function resolveThePromise(a, b){
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(a + b);
        },2000)
    })
}
resolveThePromise(2,4)
.then((result) => {
    console.log(result);
    
})
.catch((err) => {
    console.log("Error", err);
    
})