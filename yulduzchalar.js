// -----------------------------------------1 masala

// shunaqangi shakil chizish

//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *

// function bbc(num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       result += " *";
//     }
//     result += "\n";
//   }
//   return result;
// }

// console.log(bbc(10));

// -----------------------------------------2 masala

// shunday shakil chizish

//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * * * * * *   *
//  * * * * * * *     *
//  * * * * * *       *
//  * * * * *         *
//  * * * *           *
//  * * *             *
//  * *               *
//  * * * * * * * * * *

// function bbc(num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       if (i === 0 || j === 0 || i === num - 1 || j === num - 1) {
//         result += " *";
//       } else if (i + j <= num -1) {  // shu yerdagi belgini almashtirsa > teskari bo'ladi
//         result += " *";
//       } else {
//         result += "  ";
//       }
//     }
//     result += "\n";
//   }
//   return result;
// }

// console.log(bbc(10));

// --------------------------------------------------3 masala

// kanvert yasash yulduzchalardan

//  * * * * * * * * * *
//  * *             * *
//  *   *         *   *
//  *     *     *     *
//  *       * *       *
//  *                 *
//  *                 *
//  *                 *
//  *                 *
//  * * * * * * * * * *

// function bbc(num) {
//   let sum = "";
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       if (i === 0 || j === 0 || i === num -1 || j === num -1 ) {
        
//         sum += " *"
//       }else if (num / 2 >= i + 1 && (i === j || i + j === num - 1)) {
//         sum += " *"
//       } else {
//         sum += "  "
//       }
//     }
//     sum += "\n"
//   }
//   return sum
// }

// console.log(bbc(10));
