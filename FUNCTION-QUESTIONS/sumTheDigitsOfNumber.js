//! 28.Write a function to sum the digits of a number. (Easy) 
// Explanation: Convert the number to a string or 
// repeatedly modulo and divide by 10 to extract digits, 
// summing them as you go. 

function sumTheDigitOfNum(num){
    let sum = 0;
    let str = num.toString();
    console.log(typeof str);
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        let num =  Number(str[i]);
        // console.log(typeof num);
       sum += num;
        
    }
    return sum;
    
}
let num = 12345;
console.log(sumTheDigitOfNum(num));
