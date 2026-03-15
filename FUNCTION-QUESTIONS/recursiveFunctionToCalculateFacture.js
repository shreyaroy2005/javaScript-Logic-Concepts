//! Write a recursive function to calculate the factorial of N. (Medium) 
// Explanation: If N is 0 or 1 return 1; else return N * factorial(N-1). This uses recursion to solve the problem. 

//step by step :- 
//function define korte hobe.
//set function ta n ar factorial ber korbe.
// kintu akhne recursion bebohar korte hobe. mane function nijekei bar bar call korbe.loop use hobe na.
// akhane rule diyeche jodi n 0 ba 1 hoy tahole 1 retun kore deo.
// jodi n > 1 theke boro hoy tahole n ar factore korbe factorial(n - 1);
// joto khon na function ar n 1 bar 0 hoche tokhon n ke choto korte thakbe ar miltiply korte thakbe potekbar.

function calculateFactorial(n){
    if(n === 0 || n === 1){
      return 1;
    }else {
        console.log(n);
        return  n * calculateFactorial(n - 1);
      
    }
}

console.log(calculateFactorial(5));


