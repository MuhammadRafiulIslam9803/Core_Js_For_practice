// Count even and odd numbers.

// Example: [1,2,3,4,5] → even: 2, odd: 3


const prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("Enter the first number of the array: "));
const num2 = parseFloat(prompt("Enter the second number of the array: "));
const num3 = parseFloat(prompt("Enter the third number of the array: "));
const num4 = parseFloat(prompt("Enter the fourth number of the array: "));
const num5 = parseFloat(prompt("Enter the fifth number of the array: "));

const numbers = [num1, num2, num3, num4, num5];
console.log("Numbers array: ", numbers);

let evenNumbers = [] ;
let oddNumbers = [] ;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ){
        evenNumbers.push(numbers[i]);
    }
    else {
        oddNumbers.push(numbers[i]);
    }
} 
console.log ("Even numbers: " , evenNumbers);
console.log ("Odd numbers: " , oddNumbers);
