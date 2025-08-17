const squareNumbers = (arr) => arr.map(num => num * num);

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

const sumPositiveNumbers = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

const getNames = (arr) => arr.map(obj => obj.name);

const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");

squareNumbers([1, 2, 3, 4, 5]);
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
sumPositiveNumbers([1, -2, 3, 4, -5, 6]);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

getNames(people);

findLongestWord(["apple", "banana", "grapefruit", "kiwi", "strawberry"]);