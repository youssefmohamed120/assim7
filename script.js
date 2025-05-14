// ----------------------------
// Question 1:
// Write a program that allows the user to enter a number then print it.

// var number1 = prompt("Enter a number:");
// console.log(number1);


// ----------------------------
// Question 2:
// Check if number divisible by 3 and 4.

// var number2 = prompt("Enter a number:");
// if (number2 % 3 == 0 && number2 % 4 == 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


// ----------------------------
// Question 3:
// Compare two integers and print the max.

// var num1 = prompt("Enter first number:");
// var num2 = prompt("Enter second number:");
// if (num1 > num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }


// ----------------------------
// Question 4:
// Check if number is positive or negative.

// var number4 = prompt("Enter a number:");
// if (number4 < 0) {
//     console.log("Negative");
// } else {
//     console.log("Positive");
// }


// ----------------------------
// Question 5:
// Take 3 integers and print max and min.

// var h = prompt("Enter first number:");
// var b = prompt("Enter second number:");
// var c = prompt("Enter third number:");

// var max = h;
// if (b > max) max = b;
// if (c > max) max = c;

// var min = h;
// if (b < min) min = b;
// if (c < min) min = c;

// console.log(max + " is the max and " + min + " is the min");



// ----------------------------
// Question 6:
// Check if number is even or odd.

// var number6 = prompt("Enter a number:");
// if (number6 % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }


// ----------------------------
// Question 7:
// Check if a character is vowel or consonant.

// var char7 = prompt("Enter a character:");
// if (
//     char7 === "a"  char7 === "e"  char7 === "i"  char7 === "o"  char7 === "u" ||
//     char7 === "A"  char7 === "E"  char7 === "I"  char7 === "O"  char7 === "U"
// ) {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }


// ----------------------------
// Question 8:
// Print numbers from 1 to the entered number.

// var number8 = prompt("Enter a number:");
// for (var i = 1; i <= number8; i++) {
//     console.log(i);
// }


// ----------------------------
// Question 9:
// Multiplication table up to 12.

// var number9 = prompt("Enter a number:");
// for (var i = 1; i <= 12; i++) {
//     console.log(number9 * i);
// }


// ----------------------------
// Question 10:
// Print only even numbers from 1 to entered number.

// var number10 = prompt("Enter a number:");
// for (var i = 1; i <= number10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// ----------------------------
// Question 11:
// Power calculation without built-in function.

// var base = prompt("Enter base:");
// var exponent = prompt("Enter exponent:");
// var result = 1;
// for (var i = 1; i <= exponent; i++) {
//     result *= base;
// }
// console.log(result);


// ----------------------------
// Question 12:
// Enter 5 subject marks, calculate total, average, percentage.

// var total = 0;
// for (var i = 1; i <= 5; i++) {
//     var mark = prompt("Enter mark " + i + ":");
//     total += Number(mark);
// }
// var average = total / 5;
// var percentage = average;
// console.log("Total: " + total + ", Average: " + average + ", Percentage: " + percentage + "%");


// ----------------------------
// Question 13:
// Print number of days in a month (using if).

// var month = prompt("Enter month number (1-12):");
// if (
//     month === 1  month === 3  month === 5  month === 7 
//     month === 8  month === 10  month === 12
// ) {
//     console.log("31 days");
// } else if (month === 2) {
//     console.log("28 or 29 days");
// } else {
//     console.log("30 days");
// }


// ----------------------------
// Question 14:
// 5 marks - calculate percentage and print grade for each.

// for (var i = 1; i <= 5; i++) {
//     var mark = prompt("Enter mark " + i + ":");
//     var percentage = Number(mark);
//     var grade = "";
//     if (percentage >= 90 && percentage <= 100) {
//         grade = "A";
//     } else if (percentage >= 80 && percentage < 90) {
//         grade = "B";
//     } else if (percentage >= 70 && percentage < 80) {
//         grade = "C";
//     } else if (percentage >= 50 && percentage < 70) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }
//     console.log("Mark: " + mark + " => " + grade + " and " + percentage + "%");
// }


// ----------------------------
// Question 15:
// Days in month using switch(true)

// var month15 = prompt("Enter month number:");
// month15 = Number(month15);

// switch (true) {
//     case (month15 === 1  month15 === 3  month15 === 5  month15 === 7 
//           month15 === 8  month15 === 10  month15 === 12):
//         console.log("31 days");
//         break;

//     case (month15 === 4  month15 === 6  month15 === 9 || month15 === 11):
//         console.log("30 days");
//         break;

//     case (month15 === 2):
//         console.log("28 or 29 days");
//         break;

//     default:
//         console.log("Invalid month number");
// }
// ----------------------------
// Question 16:
// Check if vowel or consonant using switch(true)

// var char16 = prompt("Enter a character:");

// switch (true) {
//     case (char16 === "a"  char16 === "e"  char16 === "i"  char16 === "o"  char16 === "u" ||
//           char16 === "A"  char16 === "E"  char16 === "I"  char16 === "O"  char16 === "U"):
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
// }

// ----------------------------
// Question 17:
// Get 2 integers and print the max using switch.

// var n1 = prompt("Enter first number:");
// var n2 = prompt("Enter second number:");
// switch (true) {
//     case (n1 > n2):
//         console.log(n1 + " is the max");
//         break;
//     case (n2 > n1):
//         console.


// ----------------------------
// Question 18:
// Even or odd using switch.

// var number18 = prompt("Enter a number:");
// switch (number18 % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     default:
//         console.log("Odd");
// }


// ----------------------------
// Question 19:
// Positive, Negative or Zero using switch.

// var number19 = prompt("Enter a number:");
// switch (true) {
//     case (number19 > 0):
//         console.log("Positive");
//         break;
//     case (number19 < 0):
//         console.log("Negative");
//         break;
//     case (number19 == 0):
//         console.log("Zero");
//         break;
// }


// ----------------------------
// Question 20:
// Simple calculator using switch.

// var numA = prompt("Enter first number:");
// var numB = prompt("Enter second number:");
// var op = prompt("Enter operator (+, -, *, /):");

// switch (op) {
//     case "+":
//         console.log(Number(numA) + Number(numB));
//         break;
//     case "-":
//         console.log(Number(numA) - Number(numB));
//         break;
//     case "*":
//         console.log(Number(numA) * Number(numB));
//         break;
//     case "/":
//         console.log(Number(numA) / Number(numB));
//         break;
//     default:
//         console.log("Invalid operator");
// }