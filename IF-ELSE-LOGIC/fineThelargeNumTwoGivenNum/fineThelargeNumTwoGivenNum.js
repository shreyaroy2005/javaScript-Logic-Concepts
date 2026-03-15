//! find the larger of two given numbers.

// step by step :-
// 2to number lagbe.
// 2to number ar modhe check hobe je kon number ta boro .
// je number ta boro hobe seta return korbe 
// jeta hobe seta retun hobe na .
// jodi 2to number same hoy tahole tahole else a jabe 2 number is same;


function checkLargerNum(num1, num2){
    if (num1 > num2) {
       console.log(`given number this num1 ${num1} number is larger`);
       
    }else if(num2 > num1){
        console.log(`given number this num2 ${num2} number is larger`);
    }
    else{
        console.log("two numbers are same");
        
    }
}

checkLargerNum(20, 20)