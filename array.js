// -----------------------------------1 masala

// Arrayni birinchi elementini ortga o'tkazish

// function bbc(arr) {
//   let result = [];
//   let sum = ""
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//       result[result.length] = arr[i];
//     } else {
//       sum = arr[i];
//     }
//   }
//   result[result.length] = sum;
//   return result;
// }

// console.log(bbc([-500, 0, 50]));

// --------------------------------------------------2 masala

// ikki sonni yig'indisini arrga uchunchi qilib qaytaring

// function bbc(son, num) {
//   let result = [son, num];
//   result[result.length] = son += num;
//   return result;
// }

// console.log(bbc(1, 2));

// -----------------------------------------------------3 masala

// stringni qirqib arrayga aylantirish alohida

// function bbc(str, qirqiladigan) {
//   let sum = [];
//   for (let i = 0; i <= str.length; i++) {
//     if (i < qirqiladigan) {
//       sum[sum.length] = str[i];
//     }
//   }
//   return sum;
// }

// console.log(bbc("Hello", 2));  // // [ 'H', 'e' ]

// ------------------------------------------------------4 masala

// birxilligini topish

// function bbc(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//       return false; // bir xil emasligini topdik
//     }
//   }
//   return true; // hammasi bir xil
// }

// console.log(bbc(["@", "@", "@", "@"])); // true
// console.log(bbc(["@", "#", "@"]));      // false

// ------------------------------------------------------------5 masala

// Arraydagi elementlarning uzunligini topish

// function bbc(arr) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum[sum.length] = arr[i].length;
//   }
//   return sum;
// }

// console.log(bbc(["cat", "dog", "duck"]));

// ---------------------------------------------------------------6 masala

// ichida raqam yo'q so'zlarni arrayga solish

// function bbc(arr) {
//   let faqatHarf = [];

//   for (let i = 0; i < arr.length; i++) {
//     let soz = arr[i];
//     let raqam = false;

//     for (let j = 0; j < soz.length; j++) {
//       let belgi = soz[j];
//       if (belgi >= "0" && belgi <= "9") {
//         raqam = true;
//         break;
//       }
//     }
//     if (!raqam) {
//       faqatHarf[faqatHarf.length] = soz;
//     }
//   }
//   return faqatHarf;
// }

// console.log(bbc(["salom", "a14", "b", "3d3", "kitob", "ab9c"]));
// // 👉 Natija: ["salom", "b", "kitob"]

// -----------------------------------------------------7 masala

// ichida raqam bor so'zlarni arrayga solish

// function bbc(arr) {
//   let raqamli = [];

//   for (let i = 0; i < arr.length; i++) {
//     let soz = arr[i];
//     let raqamBor = false;

//     for (let j = 0; j < soz.length; j++) {
//       let belgi = soz[j];
//       if (belgi >= "0" && belgi <= "9") {
//         raqamBor = true;
//         break; // bitta topilsa ham kifoya
//       }
//     }

//     if (raqamBor) {
//       raqamli[raqamli.length] = soz;
//     }
//   }

//   return raqamli;
// }

// console.log(bbc(["salom", "a14", "b", "3d3"])); 
// // 👉 Natija: ["a14", "3d3"]

// ----------------------------------------------------8 masala

// array elementlari orasidagi bir xil qo'shni elamentlarni o'chirish

// function bbc(arr) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       i++;
//     } else {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }

// console.log(bbc([12, 43, 43, 23, 23, 54, 12, 23]));

// -------------------------------------------------------9 masala

// ikkinchi argumetdagi index bo'yicha arraydan ibtta element o'chirish

// function bbc(arr, ochirish) {

//     let sum = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== ochirish) {
//             sum.push(arr[i])
//         }
//     }
// return sum
// }

// console.log(bbc([54, 23, 65, 12], 1));