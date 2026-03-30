//! 3.Write a function to convert temperature from Celsius to Fahrenheit. (Easy) 
//Explanation: Use the formula F = C * (9/5) + 32 inside the function and return the result.

// step by step :-
//keu celsius a temperature dile seta Fahrenheit a covert kore debe akom function likhte hobe.
// function paramiter a celsius ar value or input ta debo.
// tarpor ay formula F = C * (9/5) + 32 ta use korbo.
// tarpor return result korbo.

function convertTemperature(celsius){
    let Fahrenheit = celsius * (9/5) + 32;
    return Fahrenheit;
}
let result = convertTemperature(9)
console.log(result);
