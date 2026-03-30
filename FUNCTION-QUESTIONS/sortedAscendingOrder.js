//! 31.Write a function that checks if an array is sorted in ascending order. (Medium) 
// Explanation: Loop through the array and compare each element to the previous one; if you find any element smaller than its predecessor, return false; otherwise, true. 

//step by step :- 
//ascending order mane choto theke boro 
// check korbo je array ar modhe jodi sob choto theke boro hoy tahole true return korbr. tahole false return korbe.
// frist a akta function define korbo.
// array ar modhe loop chalabo.
// tarpor check korbo je array modhe botoman number ta jodi choto hoy array ager number theke.
// jodi choto hoy tahole false return korbe
// jodi boro hoy tahole true return korbe.

let arr = [2,3,1,5]
function sortAscendingOrder(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false;
        }
    }
    return true;
}

let result = sortAscendingOrder(arr);
console.log(result);
