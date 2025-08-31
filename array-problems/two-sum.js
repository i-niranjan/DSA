// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
const nums = [2, 7, 11, 15];
const target = 9;

let result = [];

//this can work but not efficient
// const res = nums.map((item, index) => {
//   const sub = Math.abs(item - target);
//   if (nums.includes(sub) && result.length === 0) {
//     result = [index, nums.indexOf(sub)];
//   }
// });
// console.log(result);
