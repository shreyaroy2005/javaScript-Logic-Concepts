//! 37.Write a function that replaces spaces in a string with hyphens. (Easy) 
// Explanation: Use split(' ') and join('-') to replace 
// spaces with hyphens. 

let str = "I love JavaScript";

function replaceSpacesWithHyphens(str){
    return str.split(" ").join("-");
}
console.log(replaceSpacesWithHyphens(str));
