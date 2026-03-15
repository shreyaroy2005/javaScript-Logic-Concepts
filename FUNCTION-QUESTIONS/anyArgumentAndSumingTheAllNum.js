//! 10.Write a function that takes any number of arguments and returns their sum. (Medium) 
//Explanation: Use the rest parameter syntax (...args) to gather all arguments into an array, then loop through the array summing all values.

// step by step :- 
// function define korbo frist a .
// then ...args diye sob arguments gulo nebo.
// akta variable niye nebo jar modhe sum kore store korte pari rest proteti value.
// loop chalabo arges ar upor.
// tarpor rest[i] gulo summing korbo ar store korbo.
// tarpor sum take return korbo.


function sumValue(...rest){
    console.log(rest);
    let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    //console.log(rest[i]);
     sum = sum + rest[i];
  }
  return sum;
}

let arr = [1,2,3,4,5];
console.log(sumValue(...arr));
