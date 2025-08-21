// Generator that yields numbers from 1 to 3
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Usage
const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true (no more values)



function rangeIterator(start, end) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

// Usage
const range = rangeIterator(5, 8);
console.log(range.next()); // { value: 5, done: false }
console.log(range.next()); // { value: 6, done: false }
console.log(range.next()); // { value: 7, done: false }
console.log(range.next()); // { value: 8, done: false }
console.log(range.next()); // { value: undefined, done: true }



function* fibonacciGenerator() {
  let a = 1, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b]; // update values
  }
}

// Usage
const fib = fibonacciGenerator();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8
