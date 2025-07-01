// const arr = [1, 2, 3, 4, 5, 6, 7];
//push => Add one or more elements at the end of the array
// arr.push("a", "b");

//pop => Removes the last element from the array
//arr.pop();

//shift => Removes the first element from the array
// arr.shift();

//unshift => Add one or more elements at the beginning of the array - Vice versa of push
// arr.unshift(1, 2);

//Slice => Returns a shallow copy of a portion of an array into a new array
// let newArr = arr.slice(1, 5);
// console.log(newArr);

//Splice => Changes a original array : Remove and We can also add elements too (Optional)
// let slicedArr = arr.splice(1, 2);
// slicedArr = arr.splice(3, 4, "a", "b");
// console.log(`SLICED ARR => ${slicedArr}`);

//Concat => Merges Arrays into a new array
// const arr2 = ["a", "b", "c", "d"];
// let newArr = arr.concat(arr2);
// console.log(newArr);

// console.log(arr);

//Challenges
/* ✅ Challenge 1: Build a custom queue using an array
🔸 Use only: push() and shift() */

// const arr = [];

// const enqueue = (num) => {
//   arr.push(num);
// };
// const dequeue = () => {
//   arr.shift();
// };
// const printQueue = () => {
//   console.log(arr);
// };

/* Challenge 2
 Remove Duplicates from a arrayxx
*/
// let arr = [1, 2, 2, 3, 4, 3, 5];
// let newArr = [];

// for (i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) newArr.push(arr[i]);
// }
// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);
