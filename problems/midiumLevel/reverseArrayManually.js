// Reverse an array manually (no .reverse).

// Example: [1,2,3,4] → [4,3,2,1]

const originalArray = [1, 2, 3, 4, 5]; 
let reversedArray = [];
let reversedArray2 = [];

// Manually reversing the array system 1 
for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}

// Manually reversing the array system 2

for (let i = 0; i < originalArray.length; i++) {
    reversedArray2.unshift(originalArray[i]);
}
console.log("Original array: " , originalArray);
console.log("Reversed array (method 1): " , reversedArray);
console.log("Reversed array (method 2): " , reversedArray2);