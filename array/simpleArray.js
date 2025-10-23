const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log(fruits);

let thirdIndexFruit = fruits[3];
console.log("Fruit at index 3: " + thirdIndexFruit);

fruits[2] = 'jambura';
console.log(fruits);


fruits.push('fig');

console.log(fruits);

fruits.push('grape , coconut');
console.log("after push 3 items " + fruits);
fruits.pop();
console.log(fruits);

fruits.includes('banana');
console.log("Is banana available: " + fruits.includes('banana'));

fruits.includes('mango');
console.log("Is mango available: " + fruits.includes('mango')); 

Array.isArray(fruits);
console.log("Is fruits an array: " + Array.isArray(fruits));

const fishes = ['salmon', 'tuna', 'trout', 'cod', 'herring'];
console.log(fishes);

const concateArray = fruits.concat(fishes);
console.log("After concatenation: " + concateArray);