//!41.Write a function that performs a shallow clone of an object. (Medium) 
// Explanation: Create a new object and copy all 
// enumerable properties from the original (e.g., using 
// a loop or Object.assign). 

let obj = {
    name:"ram",
    address: {city: "kalkata"},
}

function shallowClone(obj){
    let newObj = {};

    newObj = {...obj};
    return newObj;
  
}
console.log(shallowClone(obj));
