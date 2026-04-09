//! 11.Write a function to replace all occurrences of a substring in a string. (Medium) 
// Explanation: Use split and join (or regex with 
// replaceAll) to replace all instances of the substring.

let str = "I like mango, and mango is vary sweet";

function replaceAllOccurrencesOfSubString(str, oldSub, newSub){
    console.log(str);
    
    let splitValue = str.split(oldSub);
    console.log(splitValue);

    let addNewSubValue = splitValue.join(newSub);
    console.log(addNewSubValue);
    return addNewSubValue;
    
    
}
console.log(replaceAllOccurrencesOfSubString(str, "mango", "orenge"));

