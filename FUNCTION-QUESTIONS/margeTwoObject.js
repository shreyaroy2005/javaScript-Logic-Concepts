//! 16.Write a function that merges two objects into one (shallow merge). (Medium) 
// Explanation: Create a new object and copy all 
// properties from both input objects into it (e.g., using 
// a loop or Object.assign). 

let obj1 ={
    neme:"sita",
    age: 20,
}
let obj2 ={
  city: "Kolkata",
  country: "India",
}

// function margeObj(obj1, obj2){
//     let newObj = Object.assign({}, obj1, obj2);
//     return newObj;
// }

// let result = margeObj(obj1, obj2);
// console.log(result);

function margeObj(obj1, obj2){
    let newObj = {...obj1, ... obj2};
    return newObj;
}
console.log(margeObj(obj1, obj2));
