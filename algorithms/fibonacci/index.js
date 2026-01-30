const getFibonacciSequence = (x) => {
  if (n <= 0) return [];
  if (n === 1) return [1];
  let arr = [0, 1];

  for (let i = 2; i < x; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

const y = getFibonacciSequence(0);
console.log(y);

//  [
//   0, 1, 1, 2,
//   3, 5, 8
// ]
