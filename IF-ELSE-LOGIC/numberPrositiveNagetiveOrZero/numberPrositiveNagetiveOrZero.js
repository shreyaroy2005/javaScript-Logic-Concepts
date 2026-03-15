//! determine if a number is positive, nagetive or zero.

// step by step :- 
// accept a number 
// then check if the number is graterthan 0 then the number is positive numbar.
//  if the number is lassthen 0 then the number is nagative number.
// if number === 0 then the number is zero number.

let number = 6;

function detamineNumber(num){
    if(num > 0){
       console.log("the number is positive number"); 
    }else if(num < 0){
        console.log("the number is nagative number");
    }else if(num === 0){
        console.log("the number is zero");  
    }
}

detamineNumber(number)