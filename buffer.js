// ---------------------------Baffer

// const fs = require('fs');

// // 1) 10 ta tasodifiy raqamdan iborat array yaratish
// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100)); // 0–99 oralig'i
// }

// console.log("Yaratilgan sonlar:", numbers);

// // 2) Arrayni buffer formatiga o‘tkazish
// let buffer = Buffer.from(numbers.join(' '));  
// // join(' ') – raqamlar orasiga probel qo'yadi: "12 55 3 ..."

// // 3) Bufferni faylga yozish
// fs.writeFileSync('random_numbers.txt', buffer);

// console.log("Buffer faylga yozildi.");

// // 4) Fayldan buffer o‘qish
// let readBuffer = fs.readFileSync('random_numbers.txt');

// // 5) Bufferni matnga aylantirib ekranga chiqarish
// let text = readBuffer.toString();

// console.log("Fayldan o‘qilgan matn:", text);
