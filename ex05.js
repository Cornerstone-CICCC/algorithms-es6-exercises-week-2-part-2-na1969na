// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const array = [1, 30, 4, 21, 1000];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
