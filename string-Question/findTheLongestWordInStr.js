//! 36.Write a function that finds the longest word in a sentence. (Medium) 
// Explanation: Split the sentence into words and find 
// the word with the maximum length.  

let str = "I Live In Durganoger";

function findLongestWord(str){
    let splitWord = str.split(" ");
    console.log(splitWord);
    let maximun = "";
    for (let i = 0; i < splitWord.length; i++) {
        // console.log(splitWord[1]);
        
      if (splitWord[i].length > maximun.length) {
        
        maximun = splitWord[i]
      }
    }
    return maximun;
}
console.log(findLongestWord(str));
