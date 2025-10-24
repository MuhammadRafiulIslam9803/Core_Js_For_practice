// Find the maximum and minimum element in an array.

// Example: [2, 8, 1, 6] → max: 8, min: 1
const prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
const num4 = parseFloat(prompt("Enter fourth number: "));
const num5 = parseFloat(prompt("Enter fifth number: "));

const numbers = [num1, num2, num3, num4, num5];
console.log("Numbers array: " , numbers);
 
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }

}

console.log("Maximum element: " + max);
console.log("Minimum element: " + min);