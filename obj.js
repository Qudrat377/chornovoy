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
