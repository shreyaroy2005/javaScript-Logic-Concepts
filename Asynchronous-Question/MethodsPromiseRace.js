//! 12.Use Promise.race to get the result of the first of two Promises. (Medium) 
// Explanation: Call Promise.race([promise1, 
// promise2]) and attach .then(result => ...) to get 
// whichever resolves first. 

let promise1 = new Promise((res,rej) => {
     rej("I am reject");
})

let promise2 = new Promise((res,rej) => {
     res("I am resolve");
})

Promise.race([promise1,promise2])
.then((deta) => {
    console.log("resolve",deta);
})
.catch((err) => {
    console.log("reject", err);
    
})