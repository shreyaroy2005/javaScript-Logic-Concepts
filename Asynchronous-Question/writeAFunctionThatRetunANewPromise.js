//! 7. Write a function that returns a Promise which resolves with "Success" after 1 second. (Easy) 
// Explanation: Return a new Promise that calls 
// resolve('Success') inside a setTimeout of 1000 ms. 

function returnNewPromise(){
    new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Success");
        },1000)
    })
    .then((data) => {
        console.log(data);
        
    })
    .catch((err) =>{
        console.log("error", err);
        
    })
}
returnNewPromise()