//!3. Write a function that takes a callback and calls it after a 1-second delay. (Medium) 
// Explanation: Define a function that takes a callback, 
// and inside it use setTimeout(() => callback(), 1000) 
// to call the callback after 1 second. 

function printMe(callback){
    setTimeout(() => {
        callback();
    },1000)
}

let add = () => {
    console.log("Hi i am shreya");
    
}
printMe(add)