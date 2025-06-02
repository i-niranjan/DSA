let n: number;
{
  /*
    Pattern is
****
****
****
****

    */
}

/*const printPattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
};

printPattern(5);*/

{
  /*
   *
   * *
   * * *
   * * * *
   * * * * *
   */
}

// const printPattern = (n: number) => {
//   for (let i = 0; i < n; i++) {
//     let row = "* ";

//     for (let j = 0; j < i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// };
// printPattern(6);

{
  /*
   * * * *
   * * *
   * *
   *
   */
}
// const printPattern = (n: number) => {
//   for (let i = n; i > 0; i--) {
//     let row = "";

//     for (let j = 0; j < i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// };
// printPattern(6);

{
  /*
  *
 ***
*****


   */
}

// const printPattern = (n: number) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       row += "-";
//     }
//     for (let k = 0; k < i * 2 + 1; k++) {
//       row += "*";
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       row += "-";
//     }
//     console.log(row);
//   }
// };
// printPattern(6);

{
  /*


*****
 ***
  *


   */
}

// const printPattern = (n: number) => {
//   for (let i = n - 1; i >= 0; i--) {
//     let row = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       row += "-";
//     }
//     for (let k = 0; k < i * 2 + 1; k++) {
//       row += "*";
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//       row += "-";
//     }
//     console.log(row);
//   }
// };
// printPattern(6);

/*
{
*
**
***
****
***
**
*
}


*/

// const printPattern = (n: number) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
//   for (let i = n - 1; i > 0; i--) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };
// printPattern(6);

/*
{
1
01
101
0101
10101
}
*/
// const printPattern = (n: number) => {
//   for (let i = 0; i < n; i++) {
//     let start: number = 1;
//     let row = "";
//     i % 2 === 0 ? (start = 1) : (start = 0);
//     for (let j = 0; j < i + 1; j++) {
//       row += start.toString();
//       start ^= 1;
//       // start = 1 - start;
//     }
//     console.log(row);
//   }
// };
// printPattern(5);
