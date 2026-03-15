// given a number between 1 and 7 , print the Corresponding day of the week (1= monday, 2= tuesday, ... , 7= sunday).


// step by step :- 
// number debo 1 theke 7 ar modhe.
// number sathe day match korbe je number ta match khabe set number ta je day name thakbe sei day na retun korbe.
// jobi given number sathe kono number match na khay tahole seta invelit day hobe.

let week = 3;

function findCorrespondingDay(week) {

    switch (week) {
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Sturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }


    // if(week === 1){
    //     console.log("monday");
    // }else if(week === 2){
    //     console.log("tuesday");  
    // }else if(week === 3){
    //     console.log("wednesday");  
    // }else if(week === 4){
    //     console.log("Thursday");  
    // }else if(week === 5){
    //     console.log("Friday");  
    // }else if(week === 6){
    //     console.log("Sturday");  
    // }else if(week === 7){
    //     console.log("Sunday");  
    // }else{
    //     console.log("Invalid day");

    // }
}
findCorrespondingDay(week)