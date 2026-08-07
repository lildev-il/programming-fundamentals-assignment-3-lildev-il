// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// =============================================================================

const readlineSync = require("readline-sync");

// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    return a / b;
}

// Modulus function
function modulus(a, b) {
    return a % b;
}

// Exponentiation function
function exponentiate(a, b) {
    return a ** b;
}

// Function to display the calculator menu
function displayMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// Main function
function main() {
    let running = true;

    while (running) {
        displayMenu();

        const choice = readlineSync.questionInt(
            "Select an operation (1-7): "
        );

        // Quit
        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        // Check for invalid menu choice
        if (choice < 1 || choice > 7) {
            console.log("Error: Invalid choice. Please select a number from 1 to 7.");
            continue;
        }

        // Get the two numbers
        const firstNumber = readlineSync.questionFloat(
            "Enter first number : "
        );

        const secondNumber = readlineSync.questionFloat(
            "Enter second number: "
        );

        let result;
        let operator;

        // Perform the selected operation
        if (choice === 1) {
            result = add(firstNumber, secondNumber);
            operator = "+";
        } else if (choice === 2) {
            result = subtract(firstNumber, secondNumber);
            operator = "-";
        } else if (choice === 3) {
            result = multiply(firstNumber, secondNumber);
            operator = "*";
        } else if (choice === 4) {
            if (secondNumber === 0) {
                console.log("Error: Cannot divide by zero.");
                continue;
            }

            result = divide(firstNumber, secondNumber);
            operator = "/";
        } else if (choice === 5) {
            if (secondNumber === 0) {
                console.log("Error: Cannot use zero as the modulus divisor.");
                continue;
            }

            result = modulus(firstNumber, secondNumber);
            operator = "%";
        } else if (choice === 6) {
            result = exponentiate(firstNumber, secondNumber);
            operator = "**";
        }

        console.log(
            "Result: " +
            firstNumber +
            " " +
            operator +
            " " +
            secondNumber +
            " = " +
            result.toFixed(2)
        );
    }
}

// Run the program
main();
