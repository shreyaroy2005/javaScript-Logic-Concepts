//! Calculate and print the sum of all numbers from 1 to N. (Easy) 
// Explanation: Initialise a sum at 0 and loop through numbers 1 to N, adding each number to the sum. After the loop, output the total sum.

let num = 5;

function CalculateandSumAllNum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
        console.log(sum);

    }
    return sum;
}
let totalSum = CalculateandSumAllNum(num);
console.log(totalSum);
