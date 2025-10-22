const prompt = require("prompt-sync")();

let weight = parseFloat (prompt("Enter your weight in kg: "));
let heightInch = parseFloat (prompt("Enter your height in inch:"));

// here 1 inch = 2.54 cm and 100 cm = 1 meter   
let height = (heightInch * 2.54) / 100; 

const bmi = weight / (height * height);
console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
  console.log("You are underweight.");
} else if (bmi < 24.9) {
  console.log("You have a normal weight.");
} else if (bmi < 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}
