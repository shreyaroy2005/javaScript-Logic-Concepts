
//! Write a function that removes duplicate items from an array. (Medium) 
// Explanation: Loop through the array and track seen 
// values (in an object or new array); build and return 
// a new array without the duplicates.

//step by step :- 
// function banabo
// tarpor akta emty [] nebo
// loop chalabo arr length obdi.
//if ar modhe includes methods diye check korbo je x ar modhe arr[i] ache kina. jodi na thke false retun hobe ! diye false ta true kore debo true ke false kore debo.
// true hole x ar modhe arr[i] push kore debo.
// tarpor x ke return korbo.

let arr = [1,0,4,6,0,1]
function removeDuplicate(arr){
    let x = [];
    console.log(x);
    for(let i = 0; i < arr.length; i++){
    if(!x.includes(arr[i])){
       x.push(arr[i])
    }
}
return x;

}

console.log(removeDuplicate(arr));


// let arr = [1,0,0,3,1,4,6]

// let x = [...new Set(arr)];

// console.log(x);