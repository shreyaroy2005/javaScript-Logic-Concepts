//! 5.Write a function that returns the larger of two numbers. (Easy) 
//Explanation: Use an if statement to compare the two parameters and return the larger value.

function checkLargeNum(num1, num2){
    if(num1 > num2){
        return num1; 
    }else{
        return num2;
    }
}
console.log(checkLargeNum(4, 7));
