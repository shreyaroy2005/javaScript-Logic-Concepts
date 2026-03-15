// check if the entered password matches the correct password.

// step by step :- 
// akta password user debe
// jodi user password sathe je correct password ache seta match kore jay tahole match the password.
// but don't match the password give me invalid password.

let userPassword = 356432;
let correctPassword = 356432;

function checkPassword(userPassword, correctPassword){
    if (userPassword === correctPassword) {
        console.log("The password is match");
        
    }else{
        console.log("Invalid password");
        
    }
}

checkPassword(userPassword, correctPassword);