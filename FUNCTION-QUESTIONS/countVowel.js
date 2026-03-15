//! 14.Write a function to count the number of vowels in a string. (Medium) 
// Explanation: Loop through each character of the string and increment a count for each character that is a vowel (e.g., aeiou). 

//step by step :- 
// function banobo frist a 
//tarpor count nebo 0;
//loop chalabo string ar proteti charactor ar upor.
// if fiye check korbo ke string ar modhe kono vowels ache kina jodi thake tahole count ++ korbo.
// for loop ar baire count return korbo.


function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        console.log(str[i]);
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("ram"));

