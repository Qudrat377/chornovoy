// --------------------------------------------1 masala

// objni veluesini almashtirish yani qiymatini

// function bbc(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     for (const key in obj) {
//       if (key === "age") {
//         obj[key] += 5;
//       }
//     }
//   }
//   return arr;
// }

// console.log(
//   bbc([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Olim", age: 20 },
//   ])
// );

// -------------------------------------------------------2 masala

// objni keyini almashtirish

// let arr = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Olim", age: 20 }
// ];

// // name -> firstName ga o'zgartirish
// for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];          // har bir object
//     for (let key in obj) {     // object ichidagi key
//         if (key === "name") {  // o'zgartirmoqchi bo'lgan key
//             obj["firstName"] = obj[key]; // yangi key qo'shish
//             delete obj[key];              // eski key’ni o'chirish
//         }
//     }
// }

// console.log(arr);

// --------------------------------------------------------3 masala

// objdagi string va numberlarni olish

// // 1. Obyekt yaratamiz
// let item = { name: "Ali", age: 25, city: "Toshkent", score: 90 };

// // 2. Ikkita bo‘sh massiv tayyorlaymiz
// let strings = []; // bu yerda faqat stringlar saqlanadi
// let numbers = []; // bu yerda faqat numberlar saqlanadi

// // 3. for...in sikl orqali obyektni aylanamiz
// for (let key in item) {
//   let value = item[key]; // qiymatni olamiz
//   console.log("Key:", key, "| Value:", value, "| Type:", typeof value);

//   // 4. Shart orqali turiga qarab ajratamiz
//   if (typeof value === "string") {
//     strings[strings.length] = value; // stringlarni bu massivga
//   } else if (typeof value === "number") {
//     numbers[numbers.length] = value; // sonlarni bu massivga
//   }
// }

// // 5. Natijalarni chiqaramiz
// console.log("String massiv:", strings);
// console.log("Number massiv:", numbers);

// -----------------------------------------------4 masala

// objektga qiymat qo'shish usullaridan

// function bbc(arr) {
//   let total = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total["positiveSum"] = (total["positiveSum"] || 0) + arr[i];
//     } else {
//       total["negativeSum"] = (total["negativeSum"] || 0) + arr[i];
//     }
//   }

//   return total;
// }

// console.log(bbc([1, -2, 3, -4, 5])); 
// // { positiveSum: 9, negativeSum: -6 }

// ------------------------------------------------5 masala

// arraydagi eng katta va eng kichik elementlarni orasini 0 ga tenglang

// function bbc(arr) {
//   let katta = 0;
//   let kichik = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let belgi = arr[i];
//     if (katta < belgi) {
//       katta = belgi;
//     }
//     if (kichik > belgi) {
//       kichik = belgi;
//     }
//   }

//   let minIndex = arr.indexOf(kichik);
//   let maxIndex = arr.indexOf(katta);

//   let kichikIndex = minIndex < maxIndex ? minIndex : maxIndex;
//   let kattaIndex = minIndex > maxIndex ? minIndex : maxIndex;

//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (i > kichikIndex && i < kattaIndex) {
//       obj[i] = 0;
//       // console.log(obj[i]);
//     } else {
//       obj[i] = arr[i];
//       // console.log(obj[i]);
//     }
//   }
//   let result = Object.values(obj);

//   return result;
// }

// console.log(bbc([2, 54, 4, 11, 1, 34, 11]));

// -----------------------------------------6 masala

// arraydagi takroriy elementni topish sonini sanash

// function bbc(arr) {
//   let obj = {};
//   let natija = {
//     element: 0,
//     count: 0,
//   };
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
//   }
//   let katta = Object.entries(obj);
//   let son = 0;
//   for (let i = 0; i < katta.length; i++) {
//     console.log(katta[i][1], son);

//     if (son < katta[i][1]) {
//       son = katta[i][1];
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] === son) {
//       natija.element = +key;
//       natija.count = obj[key];
//     }
//   }

//   return natija;
// }

// console.log(bbc([3, 7, 3, 2, 3, 7, 7, 8, 7]));

// ---------------------------------------------------------7 masala

// kattasini topib hamma parametrlarini aniqlash

// function bbc(...num) {
//   let sum = num;
//   let katta = sum[0];
//   let obj = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//   };

//   for (let i = 0; i < sum.length; i++) {
//     if (katta < sum[i]) {
//       katta = sum[i];
//     }
//   }
//   let soz = katta.toString();
//   let qiymatlar = [];
//   let sonlar = [];
//   for (let i = 0; i < soz.length; i++) {
//     for (const key in obj) {
//       if (soz[i] === key) {
//         qiymatlar.push(obj[key]);
//         sonlar.push(+key);
//       }
//     }
//   }
//   let array = [...sonlar, ...qiymatlar];
//   let objekts = {
//     max_namber: `${katta}`,
//     arr: `${array}`,
//     arr_length: `${array.length}`,
//     type: `${typeof array[array.length - 1]}`,
//   };
//   return objekts;
// }

// console.log(bbc(19, 21));

//---------------------------------------------------8 masala

// objni key velusini arrayga alohida array sifatida solish

// function bbc(obj) {
//   let sum = [];
//   for (const key in obj) {
//     sum.push([key, obj[key]]);
//   }
//   return sum;
// }

// console.log(bbc({ a: 1, b: 2 }));
