const arr = [1, 2, 3, 4, 5];

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

const newArr = ["@zed", "@niranjan", "dev"];

const uCheck = newArr.every((item) => item.startsWith === "@");
console.log(uCheck);
