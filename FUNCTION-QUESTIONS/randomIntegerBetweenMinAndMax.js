//! 24.Write a function that returns a random integer between min and max. (Easy) 
// Explanation: Generate a random number using 
// Math.random(), scale it to the range [min, max], 
// and use Math.floor to get an integer. 

function randomNumber(min, max){
    let integer = Math.floor((Math.random()) * (max - min + 1));
    return integer;
}

console.log(randomNumber(1,5));
