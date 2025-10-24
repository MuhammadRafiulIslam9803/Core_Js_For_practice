// Sum of all positive numbers in an array.

// Example: [2, -1, 5, -3] → 7

const array = [2, -1, 5, -3, 8, -4, 10];

let positiveSum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positiveSum += array[i];
    }
}

console.log("Sum of positive numbers: " + positiveSum);