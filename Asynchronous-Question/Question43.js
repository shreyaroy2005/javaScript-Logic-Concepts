//! 43.Demonstrate the event loop by logging 'start', then using setTimeout to log 'end' after 0ms. (Medium) 
// Explanation: This shows that even 0ms delay waits 
// until the current stack is done. For example, 
// console.log('start'); setTimeout(() => 
// console.log('end'), 0);. 

setTimeout(() => {
    console.log("end");
    
},0)
console.log("start");