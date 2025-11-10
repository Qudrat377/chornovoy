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

// ------------------------------------------------9 masala

// skoplarni balansini tekshirish

// // Qavslar muvozanatini tekshiruvchi funksiya
// function muozanatlanganmi(str) {
//   let joylash = []; // ochilgan qavslarni saqlaydigan stack
//   let moslik = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   };

//   for (const belgi of str) {
//     // Agar ochuvchi qavs bo‘lsa — stackga qo‘shamiz
//     if (["(", "[", "{"].includes(belgi)) {
//       joylash.push(belgi);
//       console.log(`+ Ochildi: ${belgi}, Stack: [${joylash.join(", ")}]`);
//     }

//     // Agar yopuvchi qavs bo‘lsa — oxirgisini solishtiramiz
//     else if ([")", "]", "}"].includes(belgi)) {
//       const ochilgan = joylash.pop();
//       console.log(`- Yopildi: ${belgi}, Tekshirilmoqda: ${ochilgan} ↔ ${moslik[belgi]}`);

//       // Noto‘g‘ri moslik bo‘lsa — false qaytaramiz
//       if (ochilgan !== moslik[belgi]) {
//         console.log("❌ Noto‘g‘ri tartib!");
//         return false;
//       }
//     }
//   }

//   // Hammasi yopilgan bo‘lsa — stack bo‘sh bo‘ladi
//   const natija = joylash.length === 0;
//   console.log(natija ? "✅ Muvozanat to‘g‘ri" : "⚠️ Yopilmagan qavslar qoldi:", joylash);
//   return natija;
// }

// // Sinovlar:
// console.log(muozanatlanganmi("({[()]})"));  // ✅ true
// console.log(muozanatlanganmi("({[})"));     // ❌ false
// console.log(muozanatlanganmi("({[]}"));     // ⚠️ false

// --------------------------------------------------------------10 masala

// strdagi harflarning necha marta takrorlanganligini topish

// function harflarniSanash(str) {
//   let sum = {}; // Natijani saqlash uchun obyekt

//   for (let i = 0; i < str.length; i++) {
//     let harf = str[i];
//     // Agar harf mavjud bo'lsa, qiymatni ol; yo'q bo'lsa 0 qil
//     let oldQiymat = sum[harf] || 0;
//     let yangiQiymat = oldQiymat + 1;

//     sum[harf] = yangiQiymat; // Yangilangan qiymatni obyektga saqlaymiz

//     // Bosqichma-bosqich chiqarish
//     console.log(
//       `Harf: "${harf}", Old qiymat: ${oldQiymat}, +1 → Yangi qiymat: ${yangiQiymat}`
//     );
//   }

//   console.log("✅ Natija:", sum);
//   return sum;
// }

// // Sinov
// harflarniSanash("javascript");

// --------------------------------------------------------11 masala

// anagramlar yani ikki so'zni tarkibi xam bir xil lekin joylashish o'rni xar xil so'zlar

// function bbc(str, matn) {
//   // 1️⃣ Agar uzunliklar teng bo'lmasa, anagram bo'lishi mumkin emas
//   if (str.length !== matn.length) return false;

//   // 2️⃣ matnni arrayga aylantiramiz, harflarni alohida ishlash uchun
//   let matnArr = matn.split(""); // masalan "silent" → ["s","i","l","e","n","t"]

//   let sum = ""; // mos kelgan harflarni saqlash uchun

//   // 3️⃣ strdagi harflarni tekshirish
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < matnArr.length; j++) {
//       // 4️⃣ Agar str[i] harfi matnArr[j] bilan mos kelsa
//       if (str[i] === matnArr[j]) {
//         sum += str[i]; // harfni sumga qo'shamiz
//         matnArr[j] = null; // shu harfni ishlatdik, keyin yana ishlamasligi uchun

//         console.log(matnArr); // o'zim qo'shdim qo'nsolni jarayonni ko'rib borish uchun

//         break; // keyingi str[i] ga o'tamiz
//       }
//     }
//   }

//   // 5️⃣ Oxirida sum str bilan bir xil bo'lsa, true
//   return sum === str;
// }

// // 🔹 Sinov
// console.log(bbc("listen", "silent")); // true
// console.log(bbc("hello", "world")); // false

// ---------------------------------------------------------12 masala

// function engUzoqSubstring(str) {
//   let engUzoq = ""; // eng uzun substringni saqlaymiz

//   // 1️⃣ Tashqi sikl: har bir harfni boshlanish nuqtasi sifatida olamiz
//   for (let start = 0; start < str.length; start++) {
//     let substring = ""; // hozir hosil qilinayotgan substring

//     // 2️⃣ Ichki sikl: startdan boshlab harflarni qo'shamiz
//     for (let i = start; i < str.length; i++) {
//       let harf = str[i];
//       let takror = false;

//       // 3️⃣ Tekshirish: harf substring ichida takrorlanganmi?
//       for (let j = 0; j < substring.length; j++) {
//         if (substring[j] === harf) {
//           takror = true;
//           break; // takror topildi → ichki sikldan chiqamiz
//         }
//       }

//       if (takror) {
//         console.log(`Takror topildi: "${harf}" -> substring to'xtadi: "${substring}"`);
//         break; // substring tugadi
//       } else {
//         substring += harf; // harfni substringga qo'shamiz
//         console.log(`Harf qo'shildi: "${harf}" -> substring hozir: "${substring}"`);
//       }
//     }

//     // 4️⃣ Agar hozirgi substring eng uzun substringdan uzun bo'lsa → yangilaymiz
//     if (substring.length > engUzoq.length) {
//       engUzoq = substring;
//       console.log(`Eng uzun yangilandi: "${engUzoq}"`);
//     }
//   }

//   return engUzoq;
// }

// // 🔹 Sinov
// let natija = engUzoqSubstring("abcabcbb");
// console.log("✅ Eng uzun substring:", natija);

// ------------------------------------------------------13 masala

// strdagi sonlarni teskari aylantirish

// function bbc(str) {
//   let teskari = [];

//   // 1. Raqamlarni teskari tartibda yig‘amiz
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] >= '0' && str[i] <= '9') {
//       teskari.push(str[i]);
//     }
//   }

//   // 2. Yangi string yasaymiz
//   let sum = "";
//   let j = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9') {
//       sum += teskari[j];
//       j++;
//     } else {
//       sum += str[i];
//     }
//   }

//   return sum;
// }

// console.log(bbc("ab1cd2ef3gh")); // "ab3cd2ef1gh"

// -------------------------------------------------------14 masala

// array ichidagi so'zlar faqat alifbo tartibida o'sganlarni qaytarish

// function bbc(arr) {
//   let harf = "abcdefghijklmnopqrstuvwxyz";
//   let natija = [];

//   for (let i = 0; i < arr.length; i++) {
//     let soz = arr[i];
//     let osuvchi = true;

//     for (let j = 0; j < soz.length - 1; j++) {
//       // harflar tartibini aniqlash uchun indexni solishtiramiz
//       let hozirgi = harf.indexOf(soz[j]);
//       let keyingi = harf.indexOf(soz[j + 1]);

//       if (hozirgi > keyingi) {
//         osuvchi = false;
//         break;
//       }
//     }

//     if (osuvchi) {
//       natija.push(soz);
//     }
//   }

//   return natija;
// }

// console.log(bbc(["abc", "dog", "xyz", "apple"]));
// // 👉 ["abc", "xyz"]

// --------------------------------------------------15 masala

// stingdagi unli harflarni teskari qilish

// function bbc(str) {
//   let unlilar = "AEIOUaeiou";
//   let hozircha = "";
//   let natija = "";
//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];
//     for (let j = 0; j < unlilar.length; j++) {
//       if (belgi === unlilar[j]) {
//         hozircha += belgi;
//       }
//     }
//   }

//   let reversed = "";
//   for (let i = hozircha.length - 1; i >= 0; i--) {
//     reversed += hozircha[i];
//   }

//   let sanash = 0;
//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];
//     let unlimi = false;
//     for (let j = 0; j < reversed.length; j++) {
//       if (belgi === reversed[j]) {
//         unlimi = true;
//         break;
//       }
//     }
//     if (unlimi) {
//       natija += reversed[sanash];
//       sanash ++
//     } else {
//       natija += belgi;
//     }
//   }
//   return natija;
// }

// console.log(bbc("IceCreAm"));
