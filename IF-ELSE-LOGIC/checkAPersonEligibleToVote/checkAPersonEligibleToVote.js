// check if the person is eligible to vote (must be 18 years or older);

// step by step :-
// akta parson a age lagbe
// check korbe je person ta age 18 or 18 up 
// if 18 or 18 up hoy tahole this person is eligible for vote.
// if this person is not 18 or 18 up this person is not eligible for vote.

let age = 10;

function checkEligibleForVote(age){
    if(age === 18 || age > 18){
        console.log("this person is eligible for vote");
    }else {
      console.log("this person is not eligible for vote");
        
    }
}

checkEligibleForVote(age);
