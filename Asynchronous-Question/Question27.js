//! 27. Create a resolved Promise with a number and chain two .then() calls to double that number twice and log the result. (Easy) 
// Explanation: Use Promise.resolve(1).then(x => x * 
// 2).then(x => x * 2).then(console.log); this will log 4. 

new Promise((res, rej) => {
    res(1);
})
.then((x) => {
   return x * 2;
})
.then((x) => {
    return x * 2;
})
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log("Error", err);
    
})