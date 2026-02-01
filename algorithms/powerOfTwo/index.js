// Power of two is a where it can be writeen 2^n

// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 != 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// };
// Time Complexity = O(log n)  ------ Because we are dividing input by half

const isPowerOfTwo = (n) => {
  return n > 0 && (n & (n - 1)) === 0;
};

// Time Complexity = O(1)

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(13));
