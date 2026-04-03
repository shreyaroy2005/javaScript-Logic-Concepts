//! 40.Write a function that delays execution of a callback by N milliseconds (simulating debounce). (Medium) 
// Explanation: Use setTimeout inside the function to 
// call the provided callback after N milliseconds. 

function executionCallback(callback, time){
    setTimeout(()=>{
        callback();
    },time)
}
function sum(a, b){
 console.log(a + b);
 
}
let result = executionCallback(() => sum(3,4), 2000);
console.log(result);
