function getFibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

const x = getFibonacciSequence(7);
console.log(x);

// n = 3 ,
//
