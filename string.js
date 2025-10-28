// ----------------------------------------------------------1 masala

// stringdagi so'zlarni uzunligini topish

// function bbc(str) {
//   let sum = [];      // so‘z uzunliklarini saqlash uchun
//   let count = 0;     // hozirgi so‘z uzunligi

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       count++;       // harf bo‘lsa, so‘z uzunligini oshiramiz
//     } else if (count > 0) {
//       sum.push(count); // bo‘sh joy topilsa va count > 0 bo‘lsa, massivga qo‘shamiz
//       count = 0;       // countni tiklaymiz
//     }
//   }

//   // Oxirgi so‘zni qo‘shish
//   if (count > 0) sum.push(count);

//   return sum;
// }

// console.log(bbc("salom hammaga nima gaplar qalay"));

// --------------------------------------------------------------boshqa variant

// function bbc(str) {
//   let natija = "";
//   let joy = true;
//   let sum = [];

//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];

//     if (belgi !== " ") {
//       natija += belgi;
//     } else {
//       sum.push(natija.length);
      
//       natija = "";
//     }
//   }
//   sum.push(natija.length)

//   return sum;
// }

// console.log(bbc("salom hammaga nima gaplar qalay"));


// --------------------------------------------------------2 masala

// stringni ichidan sonlarni olish

// function bbc(str) {
//   let sum = [];
//   let son = "";
//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];

//     if (belgi >= 0 && belgi <= 9) {
//       son += belgi;
//     } else {
//         if (son !== "") {
//             sum.push(son)
//             son = ""
//         }
//     }
//   }
// if (son !== "") sum.push(son) 

//   return sum
// }

// console.log(bbc("sa3lom55 nim0a"));

// -------------------------------------------------3 masala

// string ichida son bor yo'qligini tekshirish

// function bbc(str) {
//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];

//     if (belgi >= "0" && belgi <= "9") {
//       return "raqam bor";
//     }
//   }
//   return "raqam yo'q";
// }

// console.log(bbc("salom 5chilar nima gap"));      // raqam yo'q
// console.log(bbc("salom nima"));  // raqam bor


// ---------------------------------------------------------4 masala

// stringni boshidagi son oxiridagidan katta bo'lsa
//  stringga ++ ishorasi aks xolda -- qo'ying

// function bbc(str) {
//   let sum = [];
//   let num = "";
//   for (let i = 0; i < str.length; i++) {
//     let dallol = str[i];
//     if (dallol >= 0 && dallol <= 9) {
//       num += dallol;
//     } else {
//       sum.push(num);
//       num = "";
//     }
//   }
//   sum.push(num);
//   for (let i = 0; i < sum.length; i++) {
//     if (sum[i] !== "") {
//       if (+sum[0] > +sum[i]) {
//         return "++javasckriot++";
//       }
//     }
//   }

//   return "--javasckriot--";
// }

// console.log(bbc("12javascript12"));

// -----------------------------------------------5 masala


// SSttrriinngg shu tartibda chiqarilsin

// function bbc(str) {

//     let sum = ""
//     for (let i = 0; i < str.length; i++) {
//       sum += str[i] += str[i]
//     }
// return sum
// }

// console.log(bbc("String"));

// ------------------------------------------------------6 masala

// strdagi son o'ndan katta bo'lsa true bo'lmas false

// function bbc(str) {
//   let sum = "";
//   let hozircha = [];
//   for (let i = 0; i < str.length; i++) {
//     let dallol = str[i];
//     if (dallol >= "0" && dallol <= "9") {
//       sum += dallol;
//     } else {
//       if (sum !== "") {
//         hozircha.push(sum);
//       }
//       sum = "";
//     }
//   }
//   for (let i = 0; i < hozircha.length; i++) {
//     if (hozircha[i] >= 10) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(bbc("Zip coders consist of 5 consecutive digits"));

// ---------------------------------------------------- 7 masala

// strning boshidagi 2 harfni kesib olish

// function bbc(str) {
//   let sum = "";
//   let sanash = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (sanash < 2) {
//       sum += str[i];
//       sanash++;
//     }
//   }
//   return sum;
// }

// console.log(bbc("Hello"));

// --------------------------------------------------------8 masala


// stringdagi so'zlarni arrayga alohida qilib solish

// function bbc(str) {
//   let sum = "";
//   let total = [];
//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];
//     if (belgi !== " ") {
//       sum += belgi;
//     } else {
//       total[total.length] = sum;
//       sum = "";
//     }
//   }
//   total[total.length] = sum
//   return total
// }

// console.log(bbc("Solve programming problems in Javascript or TypeScript"));


