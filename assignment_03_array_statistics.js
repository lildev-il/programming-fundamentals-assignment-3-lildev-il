// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// =============================================================================

// Import the readline-sync library
const readlineSync = require("readline-sync");

// Function to calculate the sum
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate the average
function calculateAverage(numbers) {
    let sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Function to find the maximum value
function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

// Function to find the minimum value
function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

// Main function
function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of values must be greater than 0.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < n; i++) {
        numbers[i] = readlineSync.questionInt(`Enter number ${i + 1}: `);
    }

    console.log("\nResults:");
    console.log("Sum:     " + calculateSum(numbers));
    console.log("Average: " + calculateAverage(numbers));
    console.log("Maximum: " + findMaximum(numbers));
    console.log("Minimum: " + findMinimum(numbers));
}

// Run the program
main();
