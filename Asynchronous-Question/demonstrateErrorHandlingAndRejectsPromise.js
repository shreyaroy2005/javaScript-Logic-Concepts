//!9. Demonstrate error handling in Promises by writing a Promise that rejects and using .catch(). (Medium) 
// Explanation: Return a Promise that calls 
// reject('Error'), and after calling it use .catch(error 
// => console.log(error)). 

new Promise((resolve, reject) => {
    reject("Error");
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})