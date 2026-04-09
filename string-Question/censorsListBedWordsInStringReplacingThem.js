//! 31.Write a function that censors a list of bad words in a string by replacing them with '***'. (Medium) 
// Explanation: Loop through the list of bad words and 
// use replace or regex to replace each occurrence with 
// asterisks. 

let str = "This is bad and ugly day";

function badWord(str, badWordList){
    for (let i = 0; i < badWordList.length; i++) {
      str = str.replace(badWordList[i], "***");
    }
    return str;
}
console.log(badWord(str, ["bad", "ugly"]));
