//!28.Write a function sleep(ms) that returns a Promise which resolves after ms milliseconds, and use it in an async function to pause execution. (Easy) 
// Explanation: Inside sleep, return new 
// Promise(resolve => setTimeout(resolve, ms)). Then 
// in an async function, use await sleep(1000) to pause 
// for 1 second. 

async function sleep(ms) {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    })
}

async function PrintMe() {
    console.log("hi");
    await sleep(1000);
    console.log("Print 1secound leater");
}
PrintMe();
