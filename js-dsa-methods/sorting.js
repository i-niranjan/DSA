// const arr = [1, 2, 4, 15, 3, 24, 2, 8];

// 😼 sort() =>
// const arr2 = arr.sort(); //=> Dont this ever as sory always converts anything to string first
// const arr2 = arr.sort((a, b) => a - b);
// console.log(arr2);

// 😼 includes() =>
// const arr2 = arr.includes(2);
// console.log(arr2);

// 😼 indexOf()/lastIndexOf()
//Returns the indexof last duplicate element
// const arr2 = arr.lastIndexOf(2);
// console.log(arr2);

//Challenges
// 🔥 Challenge 1: Custom Sort by Frequency

// const arr = [4, 5, 6, 5, 4, 3];
// const freqArr = arr.sort((a, b) => a == b);
// // console.log(freqArr);

// const sortFreq = (arr) => {
//   const freq = {};
//   arr.forEach((x) => (freq[x] = (freq[x] || 0) + 1));
//   console.log(freq);
//   return arr.sort((a, b) => {
//     if (freq[a] !== freq[b]) {
//       return freq[a] - freq[b]; // lower frequency first
//     } else {
//       return a - b;
//     }
//   });
// };
// sortFreq(arr);

// 🔥 Challenge 2: Binary Search (Manual)

const arr = [1, 2, 3, 4, 5, 6];
const binarySearch = (val) => {
  const val2 = arr.forEach((item, index) => {
    if (item === val) return index;
  });
  console.log(val2);
};

console.log(binarySearch(4));
