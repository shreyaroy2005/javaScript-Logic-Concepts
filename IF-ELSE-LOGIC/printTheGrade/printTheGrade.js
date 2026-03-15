//! based on a student's score, print the grade:
//step by step :-
// student score lagbe
// je grade ar modhe score ta thakbe sei grade ta retun hobe.
// jodi score 90 theke up hoy tahole A grade.
// jodi score 80 theke up hoy and 90 theke below hoy tahole B grade.
// jodi score 70 theke up hoy and 80 theke below hoy tahole c grade.
// jodi score 60 theke up hoy and 70 theke below hoy tahole D grade.
// jodi 60 theke below hoy tahole this person is fail.

let score = 70;

function checkGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "c";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else {
        return "this person is fail";
    }
}
let result = checkGrade(score);
console.log(result);

