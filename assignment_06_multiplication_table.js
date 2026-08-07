// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// =============================================================================

const readlineSync = require("readline-sync");

// Part A - Print a single multiplication table
function printTable(number) {
    console.log("Multiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + "  x  " + i + "  =  " + (number * i));
    }
}

// Part B - Print multiplication tables from 1 to N
function printTablesUpToN(n) {
    for (let number = 1; number <= n; number++) {

        printTable(number);

        if (number < n) {
            console.log("---------------------------");
        }
    }
}

// Main function
function main() {

    // ==========================
    // PART A - Single Table
    // ==========================

    const number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    printTable(number);

    // ==========================
    // PART B - Tables from 1 to N
    // ==========================

    console.log();

    const n = readlineSync.questionInt("Enter N for tables from 1 to N: ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    printTablesUpToN(n);
}

// Run the program
main();


