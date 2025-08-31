const isArmstrong = (x) => {
  let dup = x;
  let newNum = 0;

  const digits = x.toString().length;
  while (x > 0) {
    let n = x % 10;
    newNum += Math.pow(n, digits);

    x = Math.floor(x / 10);
  }

  return newNum === dup;
};

console.log(isArmstrong(1634));
