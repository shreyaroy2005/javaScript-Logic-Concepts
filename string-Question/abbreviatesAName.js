//! 42.Write a function that abbreviates a name (e.g., 'John Smith' to 'J. Smith'). (Medium) 
// Explanation: Split the name, take first letter of the 
// first name with a dot, and combine with the full last 
// name. 

let str = "John Smith";
function abbreviatesTheName(str){
    let split = str.split(" ");
    console.log(split);
    let firsPart = split[0][0];
    console.log(firsPart);
    let lastPart = split[1];
    console.log(lastPart);
    return firsPart + "." + lastPart;
}
console.log(abbreviatesTheName(str));
