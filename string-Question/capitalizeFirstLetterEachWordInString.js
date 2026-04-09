//! 19.Write a function that capitalizes the first letter of each word in a string. (Medium) 
// Explanation: Similar to Title Case: split by space, 
// capitalize first letter of each word, join back. 

let str = "i live in durganoger";

function capitalizeFirstLetter(str){
let lowercase = str.toLowerCase();
let split = lowercase.split(" ");
let capitalize = split.map((item) => {
    return item[0].charAt().toUpperCase() + item.slice(1);
})
let join = capitalize.join(" ");
return join;
}
console.log(capitalizeFirstLetter(str));
