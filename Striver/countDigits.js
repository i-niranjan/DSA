const countDigit = (x) => {
  if (!x) return;
  let count = 0;

  while (x > 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
};

console.log(countDigit());
