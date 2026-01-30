{
  /***
    Factorial is smthn like
    4 = 1*2*3*4
    5 = 1*2*3*4*5


    Big O = O(n)
    */
}
const getFactorial = (x) => {
  let fact = 1;

  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  return fact;
};

const y = getFactorial(6);
console.log(y);

//recursive Factorial

const recFactorial = (x) => {
  if (x <= 1) return 1;
  return x * recFactorial(x - 1);
};

const z = recFactorial(6);
console.log("hey", z);
