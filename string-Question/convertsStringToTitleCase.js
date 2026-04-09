//! 14.Write a function that converts a string to Title Case (capitalizing first letter of each word). (Medium) 
// Explanation: Split the string into words, capitalize 
// the first letter of each word and lowercase the rest, 
// then join back.

let str = "hello world";
function convertsStringTitlecase(str){
    let lowercase = str.toLowerCase();
    console.log(lowercase);
    let split = lowercase.split(" ");
    console.log(split);
    let capitalize = split.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return capitalize.join(" ");
    
}
console.log(convertsStringTitlecase(str));
