//! 20.Write a function to remove an element by value from an array (first occurrence). (Medium) 
// Explanation: Loop through the array to find the element, then use splice at that index to remove it.

// step by step :- 
// akta array define korbo arr = [2,3,5,8,3,2];
// akta value define korbo jei value ta array theke remove hobe value = 3.
//output = [2,5,8,3,2];
//function define korbo
//loop chalabo array proteti element ar upor 
// tarpor check korbo arr[i] ar sathe value
//match pele splice diye kon index ta ar kotogulo element remove korte chai seta define kotbo.
// frist element remove korar por brack korte hobe nahole pore element match pele remove kore debe
// loop  ar sese arr ke return korbo.

let arr = [2, 3, 5, 8, 3, 2];
let value = 3;
function removeValueFromTheArr(arr, value) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        if (arr[i] === value){
        arr.splice(i, 1);
       
        }
    }
    return arr;
}
console.log(removeValueFromTheArr(arr, value));
