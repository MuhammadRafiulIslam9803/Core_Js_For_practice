// Move all zeros to the end while keeping order of others.

// Example: [0,1,0,3,12] → [1,3,12,0,0]

const Numbers = [0, 1, 0, 3, 12, 0, 5, 0, 7];
let zeroMovedArray = [];
let zeroCount = 0;

for (let number of Numbers) {
    if (number !== 0){
        zeroMovedArray.push(number);
    }
    else{
        zeroCount++
    }
}
for (let i = 0; i < zeroCount; i++) {
    zeroMovedArray.push(0);
}
console.log("Original array: " , Numbers);
console.log("Array after moving zeros to the end: " , zeroMovedArray);