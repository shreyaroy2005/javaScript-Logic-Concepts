//! 29.Log 'First' to the console, then use setTimeout to log 'Second' after 1 second. (Easy) 
// Explanation: Call console.log('First') and then 
// setTimeout(() => console.log('Second'), 1000). 
// 'First' appears immediately, 'Second' after 1 second.

console.log("First");
setTimeout(() => {
    console.log("scound");
    
}, 1000);
