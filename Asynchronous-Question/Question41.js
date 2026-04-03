//!41.Use Promise.all to wait for multiple async operations, some of which may fail. (Medium) 
// Explanation: Call Promise.allSettled([...]) or 
// Promise.all([...]) with .catch() to see how multiple 
// results are handled. 

let promise1 = new Promise((res, rej) => {
    res("hi")
})
let promise2 = new Promise((res, rej) => {
    rej("byy")
})

Promise.allSettled([promise1, promise2])
.then((data) => {
    console.log(data);
    
})
.catch((err) => {
    console.log(err);
    
})