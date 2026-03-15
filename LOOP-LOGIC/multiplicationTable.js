//! Display the multiplication table (from 1 to 10) for a given number X. (Medium) 
// Explanation: Use a loop from 1 to 10 and multiply the loop index by X, printing the result at each iteration. This produces the multiplication table for X. 

// step by step :- 
// frist a X name variable nite hobe. jar multiplication table chai sei numbar ta debo.
// loop chalabo 1 theke 10 obdi.
// x variable ke i ar sathe multiplication korte hobe potekbar.


let x = 2;

for(let i = 1; i <= 10; i++){
   // console.log(x * i);
    
    console.log(`${x} * ${i} = ${x*i}`);
    
}
