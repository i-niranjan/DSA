const revNum = (x) => {
  let sign = x < 0 ? -1 : 1; //we stored the sign here
  x = Math.abs(x);
  let newNum = 0;

  while (x > 0) {
    newNum = newNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  newNum *= sign;

  if (newNum < -(2 ** 31) || newNum > 2 ** 31 - 1) {
    return 0;
  }

  return newNum;
};
revNum(-123);
