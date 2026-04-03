//! 37.Write a function that checks if two objects have the same keys and values (shallow comparison). (Medium) 
// Explanation: First check if they have the same 
// number of keys, then loop through the keys of one 
// object and verify each key-value matches in the 
// other. 

let obj1 = {
    a:1,
    b:5,
}
let obj2 = {
    a:9,
    b:7,
}

function checkObj(obj1,obj2){
    let keys1 = Object.keys(obj1);
    console.log(keys1);
    let keys2 = Object.keys(obj2);
    console.log(keys2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key in keys1) {  
       if (obj1[key] !== obj2[key]) {
        return false;
       }  
    }
    return true;
}

console.log(checkObj(obj1,obj2));
