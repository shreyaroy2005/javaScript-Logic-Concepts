//! 29.Write a function that flattens an array of depth 1 (one level of nesting). (Medium) 
// Explanation: Loop through the outer array and for 
// each sub-array, loop through its elements and push 
// them to a new result array, effectively flattening one 
// level. 

// step by step :- 
// flatten mane nested array vitore array ke khule 1 level a ana.
// [1,2,[3,4],5,[6,[7]]] = [1,2,3,4,5,6,[7]];
// function define kori frist a.
//tarpor akta emty array define korbo jar modhe last a sob element gulo rakhbo.
// main array upore loop chalabo.
// protita element check hobe je seta array naki normal value. jodi normal value or string hoy tahole result ar modhe push kore return kore debo.
// jodi dekho element ta array tahole abar ay arr tar upor arekta loop chalabe tarpor emty array modhe push korbe element gulo.
// main loop ses hoye jaoyar por new array take retun korbe.

let arr = [1,2,[3,4],5,[6,7]]
function flattenArr(arr){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        //console.log(arr[i]);
        if (Array.isArray(arr[i])) {
             for (let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j])
             }
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(flattenArr(arr));
