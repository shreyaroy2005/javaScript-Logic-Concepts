//! 46.Write a function to translate a sentence into Pig Latin. (Medium) 
// Explanation: Split the sentence into words, then for 
// each word move the first letter to the end and add 
// 'ay'; join the words back into a sentence. 

let str = "hello";

function translateSentence(str){
    let split = str.split("");
    console.log(split);
    let first = split[0];
    console.log(first);
    let rest = split.slice(1).join("");
    console.log(rest);
    return rest + first + "ay";
}
console.log(translateSentence(str));
