//! 38.Write a function to compare two strings alphabetically. (Medium) 
// Explanation: Use the < and > operators or 
// localeCompare to compare strings. 

function compareTwoStrAlphabetically(str1, str2){

    if (str1 < str2) {
        console.log(`${str1} age asbe`);
    }else if(str1 > str2){
        console.log(`${str2} age asbe`);
    }else{
        console.log("to Value is same");
        
    }
}
console.log(compareTwoStrAlphabetically("bannan", "apple"));
console.log(compareTwoStrAlphabetically("hi", "hi"));
console.log(compareTwoStrAlphabetically("b", "a"));
