//! 43.Write a function that returns the prime numbers in an array. (Medium) 
// Explanation: Loop through the array and for each 
// number check primality (as in earlier), collecting 
// primes into a result array. 

let arr = [2,6,3,7,9];

function isPrime(elem){
    if (elem === 1 || elem === 0) {
        return false;
    }
    if (elem === 2) return true;
    if (elem % 2 === 0) return false;

    for (let i = 3; i < Math.sqrt(elem); i++) {
        if (i % elem === 0) {
            return false;
        }
    }
    return true;
    
}
function checkArrElemIsPrime(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        newArr.push(arr[i]);
      }
    } 
    return newArr;
}
console.log(checkArrElemIsPrime(arr));
