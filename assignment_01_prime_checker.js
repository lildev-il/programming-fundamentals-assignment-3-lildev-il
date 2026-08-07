// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// =============================================================================

// Importing the readline-sync library
const readlineSync = require("readline-sync");

// Function to check if a number is prime
function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // Check for factors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Main function
function main() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (isPrime(number)) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is NOT a prime number.");
    }
}

// Running the program
main();

