//! 22.Write a function to check if a year is a leap year. (Easy) 
// Explanation: Return true if the year is divisible by 4 
// but not by 100, or if it is divisible by 400. This 
// implements the leap year rules.

function checkYearLeapyear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return true;
    }else{
        return false;
    }
}

console.log(checkYearLeapyear(2020));
