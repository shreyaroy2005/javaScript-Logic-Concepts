//! 36.Write a function that generates an array of N random integers between 1 and 100. (Easy) 
// Explanation: Initialize an empty array and loop N 
// times , each time pushing 
// Math.floor(Math.random()*100) + 1 into the array.

function generatesRandomNum(n){
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(Math.floor(Math.random() * 100)) + 1;
    }
    return newArr;
}

console.log(generatesRandomNum(2));
