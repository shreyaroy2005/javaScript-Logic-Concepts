//!20.Use forEach to call an async function on each element of an array (and explain how to handle order of execution). (Medium) 
// Explanation: Note that forEach with async callbacks 
// doesn’t await; using a normal for loop or for...of is 
// needed for sequential awaits. 

// forEach a async kaj kore na. 
let array = [2,3,4];

async function dalay(ms) {
    return new Promise((res, rej) => {
       setTimeout(res, ms)
    })
}

for(let i = 0; i < array.length; i++){
    await dalay(1000);
    console.log(array[i]);
    
}