// 6️⃣ Find the 2nd largest number in an array (without sorting).

// Example: [3, 7, 2, 8, 6] → 7

const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number of the array: "));
const num2 = parseFloat(prompt("Enter the second number of the array: "));
const num3 = parseFloat(prompt("Enter the third number of the array: "));
const num4 = parseFloat(prompt("Enter the fourth number of the array: "));
const num5 = parseFloat(prompt("Enter the fifth number of the array: "));

const numbers = [num1, num2, num3, num4, num5];
console.log("Numbers array: ", numbers);

let firstLargest = 0;
let secondLargest = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = numbers[i];
    }
    else if (numbers[i] > secondLargest && numbers[i] !== firstLargest) {
        secondLargest = numbers[i];
    }
}

console.log("Second largest number: " , secondLargest);