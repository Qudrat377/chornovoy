//------------------------------------------------- qo'shish amali

// function bbc(arr){
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]
// }

// return sum
// }

// console.log(bbc([9, 7, 2, 3, 1]));

//------------------------------------------------- ko'paytirish amali

// function bbc(number) {
//   let sum = 1
//   let son = number.toString();

//   for (let i = 0; i < son.length; i++) {
//     sum = sum *= son[i];
//   }

//   return sum;
// }

// console.log(bbc(1234));

// ---------------------------------------------------1 masala

// -----a dan b gacha sonlarni kvadratini yig'indisi

// ================o'zgaruvchilar arrayda olingan

// function bbc(bir, ikki) {
//   let sum = [];
//   let agarKattasiBolsa = [];
//   let kichik = [];
//   if (bir >= ikki) {
//     agarKattasiBolsa.push(bir);
//   } else if (ikki >= bir) {
//     agarKattasiBolsa.push(ikki);
//   }

//   if (bir <= ikki) {
//     kichik.push(bir);
//   } else if (bir >= ikki) {
//     kichik.push(ikki);
//   }
//   let total = 0;
//   for (let i = kichik; i <= agarKattasiBolsa; i++) {
//     sum[sum.length] = i * i;
//   }

//   for (let i = 0; i < sum.length; i++) {
//     total = total + sum[i];

//     console.log(total);

//   }

//   return total;
// }

// console.log(bbc(6, 3));

// ----------------------------------qayta yechilgan varianti

// ================o'zgaruvchilar sonda yakka tartibda olingan

// function bbc(bir, ikki) {
//   let sum = [];
//   let agarKattasiBolsa = 0
//   let kichik = 0
//   if (bir >= ikki) {
//     agarKattasiBolsa += bir
//   } else if (ikki >= bir) {
//     agarKattasiBolsa += ikki
//   }

//   if (bir <= ikki) {
//     kichik += bir
//   } else if (bir >= ikki) {
//     kichik += ikki
//   }
//   let total = 0;
//   for (let i = kichik; i <= agarKattasiBolsa; i++) {
//     sum[sum.length] = i * i;
//   }

//   for (let i = 0; i < sum.length; i++) {
//     total = total + sum[i];

//   }

//   return total;
// }

// console.log(bbc(6, 3));

//-------------------- chatjpt ishlab bergani 1 masalani optimal yechim

// function bbc(bir, ikki) {
//   // Kichik va katta sonlarni topamiz
//   let kichik = bir < ikki ? bir : ikki;
//   let katta = bir > ikki ? bir : ikki;

//   let total = 0;

//   for (let i = kichik; i <= katta; i++) {
//     total += i * i;  // har bir sonning kvadratini yig‘indiga qo‘shamiz
//   }

//   return total;
// }

// console.log(bbc(6, 3));  // 86
// console.log(bbc(3, 6));  // 86
// console.log(bbc(5, 5));  // 25

// ----------------------------------------------------------2 masala

// function bbc(n) {
//   let toq = 0;
//   let juft = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//         juft += i
//       // // juft = juft += i; // // bu yerda kod takroriy bo'lgan xato emas
//       // // bunday tartibda ham ishlatish mumkin
//     } else {
//         toq += i
//       // // toq = toq += i; // // bu yerda kod takroriy bo'lgan xato emas
//       // // bunday tartibda ham ishlatish mumkin
//     }
//   }

//  let res = `Juftlar yig'indisi: ${juft} va Toqlar yig'indisi: ${toq}` //template literalda javobni qaytarish

//  return [res]  // arraysiz ham javobnin qaytarsa bo'ladi

// //   let result = juft + ":juftlar yig'indisi " + "va " + toq + " :toqlar yig'indisi"
//   return [result] // arraysiz ham javobnin qaytarsa bo'ladi
// }

// console.log(bbc(6));

// ------------------------------------------------------------Objectda natijani qaytarish

// function bbc(n) {
//   let toq = 0;
//   let juft = 0;

//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       juft += i;
//     } else {
//       toq += i;
//     }
//   }

//   return {
//     juft: juft,
//     toq: toq,
//   };
// }

// console.log(bbc(6)); // { juft: 12, toq: 9 }

// --------------------------------------------------3 masala

//============= fibbanachi sonlarini chiqarish

// function bbc(n) {
//   let sum = [];

//   sum[0] = 0;
//   sum[1] = 1;

// //   n = Math.floor(n); // Kasrni butunga aylantiramiz

//   if (n < 0) {
//     n = -n;
//   } else if (n === 0) {
//     sum = "kiritib bo'lmaydi";
//   }

//   for (let i = 2; i < n; i++) {
//     sum[sum.length] = sum[i - 1] + sum[i - 2];
//   }
//   return sum;
// }

// console.log(bbc(10));

// --------------------------------------------------4 masala

// bbc(345) → [3, 4, 5] sonni alohida qilib massivga o'tkazish

// function bbc(num) {
//     if (num < 0) {num = - num}
//   let son = num.toString();
//   let sum = [];

//   for (let i = 0; i < son.length; i++) {
//     sum[sum.length] = +son[i];
//   }
//   return sum;
// }

// console.log(bbc(-345));

// --------------------------------------------------5 masala

// Sonning tub sonligini tekshirish Natija boolean (true/false) bo‘lsin.

// function bbc(n) {
//   if (n <= 1) return false; // 1 va undan kichik sonlar tub emas

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false; // bo‘linadi — tub emas
//     }
//   }
//   return true; // bo‘linmaydi — tub son
// }

// console.log(bbc(11));  // true
// console.log(bbc(4));   // false
// console.log(bbc(17));  // true
// console.log(bbc(1));   // false
// console.log(bbc(25));  // false

// -----------------------------------------------------------------Masala 5:

// Sonning raqamlar yig‘indisi Berilgan sonning raqamlarini yig‘ing.

// function bbc(num) {
//   if (num < 0) {
//     num = -num;
//   }

//   let son = num.toString();
//   let sum = 0;
//   for (let i = 0; i < son.length; i++) {
//     sum += +son[i];
//   }
//   return sum;
// }

// console.log(bbc(342));

//----------------------------------------------------- 6 masala

// arraydagi katta sonni toping

// function bbc(arr) {
//   let sum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > sum) {
//    sum = arr[i]
//     }
//   }

//   return sum
// }

// console.log(bbc([9, 7, 2, 3, 1]));

// ------------------------------------------------------------7 masala

// arraydagi ketma ket qo'shilgan ikki sonning kattasini qaytaring

// function bbc(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     sum[sum.length] = arr[i] + arr[i + 1];

//   }

//   let dan = sum[0];

//   for (let i = 0; i < sum.length; i++) {
//     if (dan <= sum[i]) {
//       dan = sum[i];
//     }
//   }

//   return dan;
// }

// console.log(bbc([1, 5, 8, 3, 7]));
// console.log(bbc([1, 5, 2, 3, 7]));
// console.log(bbc([10, 2, -1, 5]));
// console.log(bbc([-5, -2, -1, -7]));

// ------------------------------------------------------------8 masala

// arraydagi ketma ket qo'shilgan ikki sonning
// kattasini yig'indisini berayotgan sonlarni chiqarish  javobini jptidan oldim

// function bbc(arr) {
//   let sum = [];
//   let total = arr[0] + arr[1];
//   let maxIndex = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     let currentSum = arr[i] + arr[i + 1];
//     sum.push(currentSum);

//     if (currentSum > total) {
//       total = currentSum;
//       maxIndex = i;
//     }
//   }

//   return [arr[maxIndex], arr[maxIndex + 1]];
// }

// console.log(bbc([1, 5, 8, 3, 7]));
// console.log(bbc([1, 5, 2, 3, 7]));
// console.log(bbc([10, 2, -1, 5]));
// console.log(bbc([-5, -2, -1, -7]));

// ------------------------------------------------------------9 masala

// arraydagi har bir elementni yig'indisini o'zini ortoga qo'yib ketish

// function bbc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     let original = number;
//     let sum = 0;

//     // Raqamlarini ajratib yig'indini topamiz
//     while (number > 0) {
//       let digit = number % 10;
//       sum += digit;
//       number = (number - digit) / 10; // yoki number = Math.floor(number / 10) lekin metod kerak emas deyilgan
//     }

//     // Yangi son: originalga raqamlar yig'indisini qo‘shamiz (raqam sifatida, emas matematik tarzda)
//     let newNumber = original * 10;

//     // Agar sum >= 10 bo‘lsa (masalan, 38 bo‘lsa), ko‘paytirishni 10 emas, 100 yoki 1000 ga qilamiz
//     let multiplier = 10;
//     let temp = sum;
//     while (temp >= 10) {
//       multiplier *= 10;
//       temp = (temp - temp % 10) / 10;
//     }

//     newNumber = original * multiplier + sum;

//     result[result.length] = newNumber;
//   }

//   return result;
// }

// console.log(bbc([342, 1111, 72, 24, 31, 17]));

// ------------------------------------------------------------10 masala

// arraydagi raqamlarni teskari tartibda yozib qayta arrayda chiqarish

// function bbc(bir, ikki) {
//   let son = [];

//   for (let i = bir; i <= ikki; i++) {
//     son.push(i);
//   }

//   let result = [];

//   for (let k = 0; k < son.length; k++) {
//     let chap = son[k].toString();
//     let teskari = "";

//     for (let i = chap.length - 1; i >= 0; i--) {
//       teskari += chap[i];
//     }
//   result.push(teskari);
//   }
//   return result;

// }

// console.log(bbc(100, 150));

// -----------------------------------------------------------11 masala

// palindromlarni topish jpt ishlab berdi

// function bbc(bir, ikki) {
//   let palindromlar = [];

//   for (let i = bir; i <= ikki; i++) {
//     let chap = i.toString();
//     let teskari = "";

//     for (let j = chap.length - 1; j >= 0; j--) {
//       teskari += chap[j];
//     }

//     if (chap === teskari) {
//       palindromlar[palindromlar.length] = i
//     }
//   }

//   return palindromlar;
// }

// console.log(bbc(100, 2000));

// -----------------------------------------------------------12 masala

// function bbc(arr, k) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       j++;

//       if (arr[i] + arr[j] === k) {
//         sum.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return sum;
// }

// console.log(bbc([1, 2, 3, 4, 5], 5)); // [[2, 3], [1, 4]]

//--------------------------------------------------------------- 13 masala

// berilgan sonni uch xonali arrayga aylantirish

// function bbc(arr) {
//   let result = [];
//   let temp = [];

//   for (let i = 0; i < arr.length; i++) {
//     temp[temp.length] = arr[i]; // elementni vaqtinchalik massivga qo‘shamiz

//     if (temp.length === 3) { // har 3 ta element to‘lsa
//       result[result.length] = temp; // asosiy massivga qo‘shamiz
//       temp = []; // yangidan boshlab
//     }
//   }

//   // Agar oxirida qolgan elementlar bo‘lsa, ularni ham qo‘shamiz
//   if (temp.length > 0) {
//     result[result.length] = temp;
//   }

//   return result;
// }

// console.log(bbc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ----------------------------------------------------14 masala

// katta kichikni topish

// function bbc(arr) {
// let sum = arr[0]

// for (let i = 0; i < arr.length; i++) {
//  if (sum >= arr[i]) {
//     sum = arr[i]
//  }
// }
// return sum
// }

// console.log(bbc([11, 3, 2, 12]));

// -------------------------------------------------------15 masala

// kiritilgan qiymatlarning matematik amallardagi qiymatlari

// function bbc(arr) {
// let result = [
//    `add: ${arr[0] + arr[1] + arr[2]}`,
//    `divide: ${arr[0] / arr[1] / arr[2]}`,
//    `minus: ${arr[0] - arr[1] - arr[2]}`,
//    `multy: ${arr[0] * arr[1] * arr[2]}`
// ]
// return result
// }

// console.log(bbc([15, 3, 5]));

// ---------------------------------------------------16 masala

// factorialni topish

// function bbc(factorial) {
// let sum = 1
// for (let i = 1; i <= factorial; i++) {
//   sum *= i
// }
// return sum
// }

// console.log(bbc(6));

// -----------------------------------------------------17 masala

// birinchi va ikkinchi katta sonlarni topish

// function bbc(arr) {
//   let max1 = -Infinity; // eng katta son
//   let max2 = -Infinity; // ikkinchi eng katta son

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > max1) {
//       // yangi eng katta topildi
//       max2 = max1; // eski max1 endi ikkinchi bo‘ladi
//       max1 = num;  // yangi max1
//     } else if (num > max2) {
//       // max1 dan kichik, lekin max2 dan katta bo‘lsa
//       max2 = num;
//     }
//   }

//   return max1 * max2;
// }

// console.log(bbc([1, 10, 2, 6, 5])); // 60

// ---------------------------------------------------------18 masala

// // 🔹 Ikkilikdan 10-likka o‘tkazuvchi funksiya (bosqichma-bosqich ko‘rsatadi)

// function ikkilikdanOnlikka(ikkilik) {
//   let son = 0;
//   let daraja = 0;

//   console.log("| Belgilar | Daraja | Hisob      | Yig‘indi |");
//   console.log("| -------- | ------ | ---------- | -------- |");

//   for (let i = ikkilik.length - 1; i >= 0; i--) {
//     let raqam = Number(ikkilik[i]);           // belgini raqamga aylantirish
//     let hisob = raqam * (2 ** daraja);        // 2 ning darajasi bilan ko‘paytirish
//     son += hisob;                             // yig‘indiga qo‘shish

//     // Har bir bosqichni jadval shaklida chiqarish
//     console.log(`| ${raqam} | ${daraja} | ${raqam} × 2^${daraja} = ${hisob} | ${son} |`);

//     daraja++; // keyingi darajaga o‘tish
//   }

//   console.log(`✅ Yakuniy natija (10-likda): ${son}`);
//   return son;
// }

// // 🔹 Sinov
// ikkilikdanOnlikka("1011");  // 1011 = 11

// ------------------------------------------------------------19 masala

// kadine algaritimi

// function bbc(arr) {
//   let kattaSon = arr[0];
//   let hozirgiYigindi = arr[0];
//   let boshi = 0;
//   let tugashJoyi = 0;
//   let hozirchaBoshi = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > hozirgiYigindi + arr[i]) {
//       hozirgiYigindi = arr[i];
//       hozirchaBoshi = i;
//     } else {
//       hozirgiYigindi += arr[i];
//     }
//     if (hozirgiYigindi > kattaSon) {
//       kattaSon = hozirgiYigindi;
//       boshi = hozirchaBoshi;
//       tugashJoyi = i;
//     }
//   }
//   let Kadine = [];

//   for (let i = boshi; i <= tugashJoyi; i++) {
//     Kadine[Kadine.length] = arr[i];
//   }
//   return Kadine;
// }

// console.log(bbc([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// --------------------------------------------------------20 masala

// arraydagi sonlarni yig'indisi keyingi argumetdagi qiymatga eng yaqinini topish

// function bbc(arr, yaqin) {
//   let engYaqinFarq = Infinity; // boshlanishda eng katta farq
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       const diff = Math.abs(sum - yaqin); // farqni topamiz (musbat qilib)

//       if (diff < engYaqinFarq) {
//         engYaqinFarq = diff;
//         result = [[arr[i], arr[j]]]; // yangi eng yaqin juftlik
//       } else if (diff === engYaqinFarq) {
//         result.push([arr[i], arr[j]]); // teng bo‘lsa, qo‘shamiz
//       }
//     }
//   }

//   return result.flat(); // juftliklarni birlashtirib qaytaramiz
// }

// console.log(bbc([21, 43, 11, 45, 4, 32, 54], 79));

// ---------------------------------------------------------------21 masala

// arraydagi eng katta va eng kichik elementlarni orasini 0 ga tenglang

// function bbc(arr) {
//   let katta = Math.max(...arr);
//   let kichik = Math.min(...arr);

//   // eng kichik va eng katta elementlarning indexlarini topamiz
//   let minIndex = arr.indexOf(kichik);
//   let maxIndex = arr.indexOf(katta);

//   // oraliqni topish uchun indekslarni tartiblaymiz
//   let start = Math.min(minIndex, maxIndex);
//   let end = Math.max(minIndex, maxIndex);

//   // yangi massiv hosil qilamiz
//   let result = arr.slice(); // asl massiv nusxasi

//   for (let i = start + 1; i < end; i++) {
//     result[i] = 0; // orasidagi elementlarni 0 qilamiz
//   }

//   return result;
// }

// console.log(bbc([2, 54, 4, 11, 1, 34, 11]));

// -----------------------------------------------------22 masala

// kiritilgan son 4 ning darajasimi

// function bbc(num) {
//   if (num < 1) return false;
//   while (num % 4 === 0) {
//     num /= 4; // har safar 4 ga bo‘lamiz
//   }
//   return num === 1;
// }

// console.log(bbc(16)); // true (4²)
// console.log(bbc(64)); // true (4³)
// console.log(bbc(24)); // false
// console.log(bbc(8));  // false

//----------------------------------------------------------23 masala

// arraydagi sonlarni qiymatini aniqlang

// function bbc(arr) {
//   let array = arr.flat();
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
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   if (sum <= 10) {
//     for (const key in obj) {
//       if (+key === sum) {
//         return { sum: `${obj[key]}` };
//       }
//     }
//   }
//   return sum;
// }

// console.log(
//   bbc([
//     [0, 1, 0, 0],
//     [1, 1, 0, 1],
//     [0, 1, 0, 1],
//     [0, 0, 1, 5],
//   ])
// );
