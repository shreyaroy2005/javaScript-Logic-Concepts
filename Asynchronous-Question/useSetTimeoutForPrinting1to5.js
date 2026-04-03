//! 18.Use setTimeout to log numbers 1 to 5 with a 1second delay between each, in sequence. (Medium) 
// Explanation: Chain multiple setTimeout calls or use 
// recursion/timeouts properly so that each number 
// logs after the previous with a delay. 

function delay(ms){
    return new Promise((res,rej) => {
        setTimeout(res, ms);
    })
}

async function printNum(n){
    if (n <= 5) {
        await delay(1000);
        console.log(n);  
        printNum(n + 1);
    }
}
printNum(1);
