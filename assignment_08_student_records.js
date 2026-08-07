// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// =============================================================================

const readlineSync = require("readline-sync");

// Array to store all student records
let students = [];

// Function to add a student
function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionInt("Enter score " + (i + 1) + ": ");
        scores.push(score);
    }

    // Create the student object
    const student = {
        name: name,
        id: id,
        scores: scores
    };

    // Add the student to the students array
    students.push(student);

    console.log('Student "' + name + '" added successfully.');
}

// Function to calculate the average score
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// Function to display all students
function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");
    console.log("-----------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = calculateAverage(student.scores);

        console.log("Name: " + student.name);
        console.log("ID: " + student.id);
        console.log("Scores: " + student.scores.join(", "));
        console.log("Average: " + average.toFixed(2));
        console.log("-----------------------------------------------");
    }
}

// Function to calculate the average for a specific student
function calculateStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    let foundStudent = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent === null) {
        console.log("Error: Student ID not found.");
        return;
    }

    const average = calculateAverage(foundStudent.scores);

    console.log(
        foundStudent.name +
        "'s average score: " +
        average.toFixed(2)
    );
}

// Function to display the menu
function displayMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// Main function
function main() {
    let running = true;

    while (running) {
        displayMenu();

        const choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        if (choice === 1) {
            addStudent();
        } else if (choice === 2) {
            displayAllStudents();
        } else if (choice === 3) {
            calculateStudentAverage();
        } else if (choice === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log(
                "Error: Invalid choice. Please enter a number from 1 to 4."
            );
        }
    }
}

// Run the program
main();
