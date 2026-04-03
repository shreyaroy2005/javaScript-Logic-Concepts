//! Write a function that mimics the behavior of Array.filter (takes an array and a predicate, returns a new array). (Medium) 
// Explanation: Define a function that loops through 
// the array and pushes elements that satisfy the 
// predicate into a new array, then return it.

//! filter asole ki kore
// fliter akta new array retun kore ar ayy new array modhe sudu sei element guloi thake segulo calback function true retun kore. 

Array.prototype.myFilter = function(cd){
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if(cd(this[i])){
        newArr.push(this[i])
      }
    }
    return newArr;
}


let arr = [2,4,5,3,8];

let returns = arr.myFilter((num) => {
    return num % 2 === 0;
});

console.log(returns);
