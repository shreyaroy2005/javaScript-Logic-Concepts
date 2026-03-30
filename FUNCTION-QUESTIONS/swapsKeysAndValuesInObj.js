//! 34.Write a function that swaps keys and values of an object (new object with values as keys). (Medium) 
// Explanation: Loop through the object properties and create a new object where newObj[value] = key for each key: value.

// step by step:-
// function define korbo
// amty object define korbo
// original object ar sob key loop korabo 
// proteti iteration a key ar vlaue ber korbo
// newObject ar modhe key ke value ar value ke key set korbo

let obj = {
    name: "Ram",
    age: 30,
}
function swapsObject(obj){
    let newObj = {};
    for (const key in obj) {
     newObj[obj[key]] = key;
    }
    return newObj;
}
console.log(swapsObject(obj));
