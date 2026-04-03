//! 19.Write a function that mimics the behavior of Array.map (takes an array and a callback, returns a new array). (Medium) 
// Explanation: Define a function that loops over each 
// element of the input array, applies the callback to it, 
// and pushes the result into a new array, which is 
// returned.

//! map asole ki kore
// akta array ney 
// arr ar protita element ar upor akta function chalay
// notun array retun kore

//! Array.map Prolifil 
// Array.prototype a function add korte hobe.(kn map sob array te use kora jay).
// function akta callback nebe .(jeta user debe).
// akta emty array create korbo(jetar result store korbo).
// loop chalabo original array ar upor
// protita element ar jono callback ke call koro, callback a 3 te jinish dite pari  current value, index, puro array.
// callback ar result new array te push koro.
// sese new array ke return koro.



Array.prototype.myMap = function(cd){
   let newArray = [];
   for (let i = 0; i < this.length; i++) {
      let result = cd(this[i]);
      newArray.push(result);
   }
   return newArray;
}

let arr = [2,3,4,5];
let newArr = arr.myMap((item) => {
   return item * 2;
});
console.log(newArr);






// let arr = [2,3,5]
// function mimicsOfMap(arr,callback){
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//        let value = callback(arr[i]);
//        newArr.push(value);
//     }
//     return newArr;
// }

// function miltipay(x){
//    return x * 2;
// }

// console.log(mimicsOfMap(arr, miltipay));



