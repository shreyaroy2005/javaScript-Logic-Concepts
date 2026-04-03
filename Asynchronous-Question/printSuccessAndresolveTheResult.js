//! 8. Write code that uses .then() to handle the resolution of the above Promise and log the result. (Easy) 
// Explanation: Call the promise function and then use 
// .then(result => console.log(result)) to log 'Success'. 

new Promise((resolve, reject) => {
    resolve("Success");
})
.then((deta) => {
    console.log(deta);
})
.catch((err) => {
    console.log("error", err);
})