//! Print all even numbers between 1 and N (inclusive), given N. (Easy) 
// Explanation: Loop from 1 to N and print the number if it is divisible by 2. This uses a loop and an if condition to filter even numbers.

let num = 10;

for(let i = 1; i <= num; i++){
    //console.log(i);
    if (i % 2 === 0) {
        console.log(i);
        
    }
}