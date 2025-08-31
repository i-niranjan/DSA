const isPalindrome = (x) => {
  if (x < 0) return false;
  let dup = x;

  let newNum = 0;

  while (x > 0) {
    newNum = newNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (newNum < -(2 ** 31) || newNum > 2 ** 31 - 1) {
    return 0;
  }

  return newNum === dup;
};

console.log(isPalindrome(-121));
