// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// =============================================================================

const readlineSync = require("readline-sync");

// Part A - Print the first N Fibonacci terms
function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be greater than 0.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = "";

    for (let i = 1; i <= n; i++) {
        sequence += first + " ";

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence: " + sequence.trim());
}

// Part B - Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    return first === number;
}

// Main function
function main() {

    // Part A
    let n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    console.log();

    // Part B
    let number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

// Run the program
main();
