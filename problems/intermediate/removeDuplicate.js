// Remove duplicates without using Set.
// Example: [1,2,2,3,1] → [1,2,3]

const Array = [1, 2, 2, 3, 4, 4, 5, 1, 3 , 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
let uniqueArray = [];

for (let number of Array) {
   if (!uniqueArray.includes(number)){
    uniqueArray.push(number);
   }
}
console.log( "Original Array : ", Array);
console.log( "unique Array : ", uniqueArray);