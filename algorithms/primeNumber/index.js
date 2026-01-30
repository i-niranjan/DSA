{
  /***
    A Prime Number is a natural number which is greater than one and that is not product of two
    smaller numbers.
    */
}

//Prob : create isPrime function

//Good first soln
// const isPrime = (n) => {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// Time Comp. : O(n)

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(9));
