//! 25.Write a function that checks if a number is prime. (Medium) 
// Explanation: Inside the function, loop from 2 up to 
// the square root of the number to test divisibility. 
// Return false if any divisor is found, otherwise true. 

function checkPrimeNumber(num){
  if(num === 0) return false;

  if (num <= 1) {
    console.log("0, 1");
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % 3 === 0) {
      return false;
    }
  }

  return true;

}

function printNum(number){
    let arr = [];
    for (let i = 2; i < number; i++) {
      if (checkPrimeNumber(i)) {
        arr.push(i);
      }
    }
    return arr;
}

let number = 10;
console.log(printNum(number));
