//! 19.Demonstrate async/await by writing two asynchronous calls in sequence (first await one, then the other). (Medium) 
// Explanation: In an async function, use await on first 
// fetch or promise, then await on the second, 
// processing results in order.

async function FristAsyncFun() {
   return new Promise((res, rej) => {
        setTimeout(() => {
            res("Frist Asynchronous Function");
        }, 1000)
    })
}

async function ScoundAsyncFun() {
   return new Promise((res, rej) => {
        setTimeout(() => {
            res("Scound Asynchronous Function");
        }, 1000)
    })
}

async function runFunc() {
    let frist = await FristAsyncFun();
    console.log(frist);
    
    let scound = await ScoundAsyncFun();
    console.log(scound);

}

runFunc()