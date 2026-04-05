//! 45.Write a function that creates an array of arrays representing a 2D matrix of zeros (size MxN). (Medium) 
// Explanation: Use nested loops: first loop for rows, 
// inside loop for columns, pushing 0 into an inner 
// array, then that inner array into the matrix.
let rows = 3;
let columns = 2;

function matrixOfZeros(rows, columns) {
    let newArr = [];
    for (let i = 0; i < rows; i++) {
        let inner = [];
        for (let j = 0; j < columns; j++) {
            inner.push(0);
        }
        newArr.push(inner);
    }
    return newArr;
}
console.log(matrixOfZeros(rows, columns));
