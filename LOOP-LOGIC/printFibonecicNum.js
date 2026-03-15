//! Print the Fibonacci sequence up to N terms. (Medium) 
// Explanation: Initialise variables to store the first two Fibonacci numbers and use a loop to compute each next number by summing the previous two. Output each term in sequence.

// step by step :- 
// frist koto obdi ami Fibonacci sequence chai.
// store the frist two Fibonacci number in variable.
// Fibonacci number start hoy 0, 1 diye .
// secoundLastNum = 0 and lastNum = 1 ;
// use a loop 
// secoundLastNum + lastNum = calculate next fibonacci number;and it store new variable ar modhe.
// update the secoundLastNum and lastNum number;
// secoundLastNum ar lastNum ar value ta asbe; secoundLastNum = lastNum;
//lastNum ar modhe secoundLastNum + lastNum kore asbe, lastNum = newnum
// retun the newNum;

let n = 5;

function checkFibonacciNum(n){
    let secoundLastNum = 0;
    let lastNum = 1;
    for(let i = 1; i <= n; i++){
        // console.log(i);

       let newFibNum = secoundLastNum + lastNum;

       secoundLastNum = lastNum;
       // console.log(secoundLastNum);
       
       lastNum = newFibNum;
       // console.log(lastNum);
       
       console.log(newFibNum);
    }
}

checkFibonacciNum(n)