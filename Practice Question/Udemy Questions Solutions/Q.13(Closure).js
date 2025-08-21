function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// Example usage:
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function rateLimiter(fn, limit) {
  let lastCalled = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    }
    lastCalled = now;
    return fn(...args);
  };
}

// Example usage:
const sayHello = () => "Hello!";
const limitedHello = rateLimiter(sayHello, 2000);

console.log(limitedHello()); // "Hello!"
console.log(limitedHello()); // "Rate limit exceeded"
setTimeout(() => console.log(limitedHello()), 2100); // "Hello!" after 2.1 sec

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache:", key);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Example usage:
const slowSquare = (n) => {
  console.log("Computing...");
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(4)); // "Computing..." -> 16
console.log(memoizedSquare(4)); // "Fetching from cache: [4]" -> 16
console.log(memoizedSquare(5)); // "Computing..." -> 25
