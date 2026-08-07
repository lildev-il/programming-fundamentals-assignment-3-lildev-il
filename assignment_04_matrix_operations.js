// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix from the user
function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        matrix[i] = row.split(' ').map(Number);

        // Check that the correct number of values was entered
        if (matrix[i].length !== cols) {
            console.log(`Error: Please enter exactly ${cols} numbers.`);
            i--; // Ask for the row again
        }
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join("\t"));
    }
}

// Part A - Transpose a matrix
function transposeMatrix(matrix) {
    let transpose = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }

    return transpose;
}

// Part B - Add two matrices
function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[0].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Part C - Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < matrixA[0].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Main program
function main() {

    // ==========================
    // PART A - Transpose
    // ==========================
    console.log("=== PART A: Matrix Transpose ===");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    let transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);

    // ==========================
    // PART B - Addition
    // ==========================
    console.log("\n=== PART B: Matrix Addition ===");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter Matrix A:");
    let matrixA = readMatrix(rows, cols);

    console.log("Enter Matrix B:");
    let matrixB = readMatrix(rows, cols);

    let sum = addMatrices(matrixA, matrixB);

    console.log("\nSum Matrix:");
    displayMatrix(sum);

    // ==========================
    // PART C - Multiplication
    // ==========================
    console.log("\n=== PART C: Matrix Multiplication ===");

    let m = readlineSync.questionInt("Enter rows of Matrix A: ");
    let n = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A:");
    matrixA = readMatrix(m, n);

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");

    if (rowsB !== n) {
        console.log("Error: Number of rows in Matrix B must equal the number of columns in Matrix A.");
        return;
    }

    let p = readlineSync.questionInt("Enter columns of Matrix B: ");

    console.log("Enter Matrix B:");
    matrixB = readMatrix(rowsB, p);

    let product = multiplyMatrices(matrixA, matrixB);

    console.log("\nProduct Matrix:");
    displayMatrix(product);
}

// Run the program
main();

