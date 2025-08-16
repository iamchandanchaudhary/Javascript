function filterNumbers(arr) {
  return arr.filter(item => typeof item === "number" && !isNaN(item));;
}

function reverseArray(arr) {
    let value = arr.reverse();
  return value;
}

function findMax(arr) {
    if (arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  return arr.flat(Infinity);;
}

findMax([12, 65, 34, 8, 28]);
filterNumbers([1, "hello", 42, true, null, 3.14, "99", NaN]);
reverseArray([1, 2, 3, 4, 5, 6]);
removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1]);
flattenArray([1, [2, [3, [4, 5]]], 6]);