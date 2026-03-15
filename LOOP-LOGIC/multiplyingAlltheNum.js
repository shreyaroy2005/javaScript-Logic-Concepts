//! Calculate the product of all numbers from 1 to N. (Medium) 
// Explanation: Initialise a product variable at 1 and loop from 1 to N, multiplying each number to the product. This computes the factorial of N without using recursion.

// step by step :- 
// N name variable niye nebo Loop ar baire.
// start product variable = 1;
// loop chalabo 1 thele  N abdi.
// everytime multiplying korbo i ke prodect ar sathe.
// potekbar result ke store korbo prodect ar modhe.


let num = 5;

function checkMultuplyNum(num){
    let product = 1;
    for(let i = 1; i <= num; i++){
      product = product * i;
      
    }
    return product;
}

let result = checkMultuplyNum(num);
console.log(result);
