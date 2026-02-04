// let arr = [-5, 2, 10, 4, 6];

const findArr = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
};

console.log(findArr([-5, 2, 10, 4, 6], -5));
