//! 10.Write an async function with a try/catch block that awaits a rejected Promise. (Medium) 
// Explanation: In the async function, await the 
// promise inside a try block, and handle the error in 
// the catch block. 

async function rejectedpromise(){
    try {
        let data = await new Promise((resolve, reject) => {
            reject("This Promise is Rejected");
        })
    } catch (error) {
        console.log(error);
    }
}

rejectedpromise()