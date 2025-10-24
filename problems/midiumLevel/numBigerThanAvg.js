// Count how many elements are greater than the average.
// Example: [1,2,3,4,5] → avg=3 → greater: [4,5] → 2
const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number of the array: "));
const num2 = parseFloat(prompt("Enter the second number of the array: "));
const num3 = parseFloat(prompt("Enter the third number of the array: "));
const num4 = parseFloat(prompt("Enter the fourth number of the array: "));
const num5 = parseFloat(prompt("Enter the fifth number of the array: "));

const numbers = [num1, num2, num3, num4, num5];
console.log("Numbers array: ", numbers);

const average = num1 + num2 + num3 + num4 + num5 / numbers.length;
console.log("Average: " , average);

let biggerThanAvg = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
        biggerThanAvg.push(numbers[i]);
    }
}
console.log("Numbers bigger than average: " , biggerThanAvg);
