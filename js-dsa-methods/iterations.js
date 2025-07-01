// const arr = [1, 2, 3, 4, 5];

//😼forEach()

// forEach Doesn't return anything , hereNewShit stays undefined
// const newShit = arr.forEach((item, index) => {
//   console.log(`Index : ${index} | Number : ${item}`);
// });
// console.log(`NEW SHIT => ${newShit}`);

//😼map()

//My guy map return a new array
// const intoTwo = arr.map((item) => item * 2);
// console.log(intoTwo);

//😼filter()

//Returns a subset | Return only those values that passes the conditon

// const evenNum = arr.filter((item) => item % 2 == 0);
// console.log(evenNum);

//😼reduce()

//Reduces array into a single value
//What this thing need => accumulator, val, and initial value (optional)

// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);

//😼find()

//Return the first element that matches
//Stops once found

// const users = [
//   { id: 1, name: "Niranjan" },
//   { id: 2, name: "Zed" },
// ];

// const found = users.find((users) => users.id === 2);
// console.log(found);

//😼 some() And 😼every()
//some => return true if at least one item passes
//every => returns true if all passes
// let someCheck, everyCheck;
// someCheck = arr.some((n) => n % 2 == 0);
// everyCheck = arr.every((n) => n % 2 == 0);
// console.log(`Some => ${someCheck} | Every => ${everyCheck}`);

//Challenges

//😼FIRST
// const cart = [
//   { item: "Shirt", price: 999 },
//   { item: "Jeans", price: 1999 },
//   { item: "Shoes", price: 2999 },
// ];

// const totalPrice = cart.reduce((acc, cart) => acc + cart.price, 0);
// console.log(totalPrice);

//😼SECOND

// const newArr = ["hi", "coding", "is", "awesome"];
// const find = newArr.find((item) => item.length > 5);
// console.log(find);

//😼third
//all unames must start with @

// const newArr = ["@zed", "@niranjan", "dev"];

// const uCheck = newArr.every((item) => item.startsWith === "@");
// console.log(uCheck);

//More
// 💣 Challenge 1: Group Words by First Letter

// const newArr = ["apple", "banana", "apricot", "blueberry", "avocado"];

// const modArr = newArr.reduce((acc, val) => {
//   const startsWith = val[0];
//   if (!acc[startsWith]) {
//     acc[startsWith] = [];
//   }
//   acc[startsWith].push(val);
//   return acc;
// }, {});
// console.log(modArr);

//💣 Challenge 2: Flatten a Nested Array
// const newArr = [1, [2, 3], [4, 5, [6]], 7];
// const flatten = newArr.flat(Infinity);
// console.log(flatten);

// const flatArray = (arr) => {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       let val = flatArray(item);
//       console.log(`VAL => ${val}`);
//       console.log(val);

//       result.push(...val);
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// };
// console.log(flatArray(newArr));

//TIP TO SPREAD A SHIT ALWAYS
// let val = [1, 2];
// let arr1 = [4, 5];
// arr1.push(...val);
// console.log(arr1);

// 💣 Challenge 3: Frequency Count

// const newArr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const countArr = newArr.reduce((acc, val) => {
//   if (!acc[val]) acc[val] = 0;
//   acc[val] += 1;
//   return acc;
// }, {});
// console.log(countArr);

// // 💣 Challenge 4: Top Scorer
// const scores = [
//   { name: "Zed", score: 80 },
//   { name: "Niranjan", score: 95 },
//   { name: "Ravi", score: 87 },
// ];

// const highestScorer = scores.reduce((acc, item) => {
//   const name = acc.score > item.score ? acc : item;
//   return name;
// }).name;
// console.log(highestScorer);

// 💣 Challenge 5: Unique Elements Preserving Order
// const newArr = [1, 2, 2, 3, 4, 3, 5];
// console.log(newArr.indexOf(4));

// const filteredArr = newArr.filter(
//   (item, index) => newArr.indexOf(item) === index
// );
// console.log(filteredArr);

// 💣 Bonus Challenge 6: Chunk an Array
// const newArr = [1, 2, 3, 4, 5, 6, 7];

// const chunkArr = (arr, size) => {
//   let result = [];
//   console.log(arr);

//   arr.forEach((item) => {
//     const lastChunk = result[result.length - 1];
//     console.log("lastchunk", lastChunk);

//     if (!lastChunk || lastChunk.length === size) {
//       //   console.log(item);

//       result.push([item]);
//       console.log("result", result);
//     } else {
//       lastChunk.push(item);
//     }
//   });
//   return result;
// };
// console.log(chunkArr(newArr, 3));

// const chunkArr = newArr.reduce((acc, currentVal) => {
//   const lastChunk = acc[acc.length - 1];
//   if (!lastChunk || lastChunk.length === 3) {
//     acc.push([currentVal]);
//   } else {
//     lastChunk.push(currentVal);
//   }
//   return acc;
// }, []);
// console.log(chunkArr);
