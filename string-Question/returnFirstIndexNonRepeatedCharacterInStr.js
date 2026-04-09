//! 23.Write a function that returns the index of the first non-repeated character in a string. (Medium) 
// Explanation: Use an object to count character 
// occurrences, then loop again to find the first with 
// count 1.

let str = "swiss";

function findNonRepeatedIndexCharacter(str){
    let count = {};
    for (const key of str) {
        console.log(key);
        
     count[key] = (count[key] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return i;
        }
      
    }
    return -1;
}
console.log(findNonRepeatedIndexCharacter(str));
