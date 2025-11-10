// let son = [3.02, -3.65, 5, -8]
// let natija = []

// for (let i = 0; i < son.length; i++) {

// // natija.push(Math.round(Math.abs (son[i])))               /* funcsiya bilan ishlash*/

// natija[natija.length] = Math.round(Math.abs (son[i]))         /*codda fucsiya yozish*/

// }
// console.log(natija);

// qo'shish

// let array = [3, 21, 5, 8]
// d = 0
// for (let i = 0; i < array.length; i++) {
//     d = d + array[i]

// }

// console.log(d);

// arrayga yangi qiymat kiritish

// let sum = []
// sum[0] = 'lak'
// sum[1] = 3

// console.log(sum);

// qiymatni arraydaga solib qaytarish

// let array = [3, 21, 5, 8]
// sum = []
// for (let i = 0; i < array.length; i++){

//     sum[i] = array[i]

/* yoki shunday qilsa ham bo'ladi */

// sum[sum.length] = array[i]

//     }

// console.log(sum);

// let crezy = [1, 2, 3, 4, 5, 6, 7, 8]
// let son = []

// // for (let i = 0; i < crezy.length; i++) {
// son[son.length] = crezy

// // }

// console.log(son)

//------------ forda teskari aylanish

// for (let i = 10; i >= 1; i--) {

//     console.log(i);
// }

// ---------------forda aylanish

// for (let j = 1; j <= 10; j++) {

//     console.log(j);

// }

// let bbc = [1, 2, 3, 4, 5, 6, 7]

// natija = []

// for (let i = bbc.length -1; i >= 0; i--) {

//    natija[natija.length] = bbc[i]

// }

//  console.log(natija);

// ----------------------objga yangi qiymat qo'shish

// let obj = {}

// obj.info = 44

// obj["info"] ++

// console.log(obj);

// ------------stringni arrayga kodda o'tkazish

// let uservelue = "Hello World"
// let sum = []

// for (let i = 0; i < uservelue.length; i++) {

//   sum[i] = uservelue[i]
// }

// console.log(sum);

// ----------------------------chornovoy yaxshilab tushunish kerak

// let uservelue = "Hello World"; /*kiritilgan matn*/
// let cantex = "o"; /* qirqish kerak bo'lgan joy*/
// let yigindi = "";
// let sum = [];

// for (let loop = 0; loop < uservelue.length; loop++) {
//   if (uservelue[loop] === cantex) {

//     sum[sum.length] = yigindi;
//     yigindi = "";
//   }
//   else {
//     yigindi += uservelue[loop];
//   }
// }
// sum[sum.length] = yigindi;

// console.log(sum);

// ----------------------------chornovoy yaxshilab tushunish kerak

// function unliTeskari(matn) {
//     let unlilar = "aeiouAEIOU";
//     let unliHarflar = [];

//     // 1. Unlilarni alohida saqlab olamiz
//     for (let i = 0; i < matn.length; i++) {
//         let belgi = matn[i];
//         let unli = false;

//         // Belgining unli yoki yo‘qligini tekshiramiz (metodsiz)
//         for (let j = 0; j < unlilar.length; j++) {
//             if (belgi === unlilar[j]) {
//                 unli = true;
//                 break;
//             }
//         }

//         // Agar unli bo‘lsa, arrayga qo‘shamiz (pushsiz)
//         if (unli) {
//             unliHarflar[unliHarflar.length] = belgi;
//         }
//     }

//     // 2. Yangi matnni tuzamiz, unli harflarni teskari tartibda joylaymiz
//     let natija = "";
//     let unliIndex = unliHarflar.length - 1;

//     for (let i = 0; i < matn.length; i++) {
//         let belgi = matn[i];
//         let unli = false;

//         // Belgining unli yoki yo‘qligini tekshirish
//         for (let j = 0; j < unlilar.length; j++) {
//             if (belgi === unlilar[j]) {
//                 unli = true;
//                 break;
//             }
//         }

//         if (unli) {
//             natija = natija + unliHarflar[unliIndex];
//             unliIndex = unliIndex - 1;
//         } else {
//             natija = natija + belgi;
//         }
//     }

//     return natija;
// }

// // Test qilish
// let kirish = "IcCeCrEAm";
// let chiqish = unliTeskari(kirish);
// console.log(chiqish); // "AcCeCrEIm"

// ----------------------------arraydagi oxirgi sonni olish

// let son = [1, 2, 3, 7]

// console.log(son[son.length -1]);

// ----------------------------chornovoy yaxshilab tushunish kerak

// function bbc(arr) {
//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let bormi = arr[i];
//     let yoqBor = false;

//     for (let j = 0; j < bormi.length; j++) {
//       if (bormi[j] === 1) {
//         yoqBor = true;
//         break;
//       }
//     }
//     if (yoqBor){
//         res = res + 1
//     }
//   }
//   return res
// }

// console.log(bbc([[1, 2, 3], [7, 1], [1, 3], [1], [1]]));

// function bbc(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let qosh = arr[i];

//     for (let j = 0; j < qosh.length; j++) {
//       sum = sum + qosh[j];
//     }
//   }
//   return sum;
// }

// console.log(bbc([[0, 1, 0, 0], [1, 1, 0, 1], [0, 1, 0, 1], [0, 0, 1, 5]]));

// ---------------------------------------------------------------------------9 dars 6 masala

// function bbc(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let qiymat = arr[i];
//     let bor = false;

//     for (let j = 0; j < sum.length; j++) {
//         bor = true
//         break
//     }
//   }
//   if (!bor) {
// sum[sum.length] = qiymat
//   }
// }

// console.log(bbc([1, 2, 3, 4, 4, 2, 5, 5]));

// ----------------------------------------------------------qo'shish uchun ishlatiladi

// console.log("5" + "2");

// console.log(+ "5" + + "2");  // Natija: 7

// console.log(Number("5") + Number("2"));  // Natija: 7
// console.log(parseInt("5") + parseInt("2"));  // Natija: 7

// ------------------strindagi qiymatni belgilarga qarab arrayga solish

// let val = "salom hammaga nima gaplar qalay";
// let toArray = [];

// let str = "";
// for (let i = 0; i < val.length; i++) {
//   if (val[i] !== " ") {
//     str += val[i];
//   } else if (val[i] === " ") {
//     toArray[toArray.length] = str;
//     str = "";
//   }
// }
// console.log(toArray);

// -------------------kodda ishlash kerak sonni uzunligini chiqar

// function bbc(nechiXonaliSon) {

// let son = nechiXonaliSon.toString()

// return son.length
// }

// console.log(bbc(1000));

// ---------------------ishlash kerak

// function bbc(kiritilganQiymatgachaYigindiniTopish) {

//     let sum = 5
//     let nan = ""
//     let natija = 0

//     for (let sham = 1; sham <= sum; sham++) {
//       nan += sham
//       }

//       for (let j = 0; j < nan.length; j++) {
//        natija += +nan[j]
//       }

// console.log(natija);

//------------------------------------------------ 5 masala

//  ustoz shu kod nima uchun to'g'ri ishlaganini tushuntirib bering o'zim ishladim
// lekin qanday ishlaganimni o'zim ham tushunmadim (:

// function bbc(gugurtCHopidanUyQurgandaQanchaGugurtCHopiKetishiniHisoblash) {
//   let GugurtSoni = 0;
//   let qoshishSoni = 5
//   let qoshishSoni2 = 1;

//   if (gugurtCHopidanUyQurgandaQanchaGugurtCHopiKetishiniHisoblash === 1) {
//     GugurtSoni += 6;
//   } else if (
//     gugurtCHopidanUyQurgandaQanchaGugurtCHopiKetishiniHisoblash !== 1
//   ) {
//     for (
//       let gugurt = 0;
//       gugurt < gugurtCHopidanUyQurgandaQanchaGugurtCHopiKetishiniHisoblash;
//       gugurt++
//     ) {
//      GugurtSoni = qoshishSoni2  += qoshishSoni;
//     }
//   }

//   return GugurtSoni;
// }

// console.log(bbc(2));

// -------------------------------------shriftlash

// function bbc(shifrlash) {

//     let kiritilganniYig = ""

// let harflar = {
//     a : "0",
//     b : "bi",
//     c : "jg",
//     d : "9",
//     e : "6",
//     f : "ew",
//     g : "ki",
//     h : "rt",
//     i : "ot",
//     k : "oj",
//     l : "pw",
//     m : "wt",
//     n : "iw",
//     o : "wo",
//     p : "ti",
//     q : "pw",
//     r : "it",
//     s : "ut",
//     t : "os",
//     u : "ow",
//     v : "59",
//     w : "sk",
//     x : "iy",
//     y : "pr",
//     z : "ut",
// }

// for (const latters in harflar) {

//   console.log(latters);

// if ()

// }

// }

// console.log(bbc("Assalomu alaylum"));

// -------------------------------jpt

// function bbc(shifrlash) {
//   let harflar = {
//     a: "0",
//     b: "bi",
//     c: "jg",
//     d: "9",
//     e: "6",
//     f: "ew",
//     g: "ki",
//     h: "rt",
//     i: "ot",
//     k: "oj",
//     l: "pw",
//     m: "wt",
//     n: "iw",
//     o: "wo",
//     p: "ti",
//     q: "pw",
//     r: "it",
//     s: "ut",
//     t: "os",
//     u: "ow",
//     v: "59",
//     w: "sk",
//     x: "iy",
//     y: "pr",
//     z: "ut",
//   };

//   return shifrlash
//     .split("")
//     .map((item) => {
//       let lower = item.toLowerCase();
//       return harflar[lower] ? harflar[lower] : item;
//     })
//     .join("");
// }

// console.log(bbc("Assalomu alaylum"));

// 10 dars 6 masala

// function bbc(num1) {
//     let result = Number(num1)
//     return result.toString()
// }
// console.log(bbc("00402"));
// console.log(bbc("230.000"));
// console.log(bbc("03.1400"));
// console.log(bbc("30"));

// ---------------------------------------------- login tekshirish

// let users = [
//   {
//     email: "ali@gmail.com",
//     password: "ali111",
//   },
//   {
//     email: "aziz@gmail.com",
//     password: "aziz11",
//   },
//   {
//     email: "jasur@gmail.com",
//     password: "jasur11",
//   },
// ];

// function login(email, password) {
//   let foundedUser = null;

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       foundedUser = users[i];
//       break;
//     }
//   }

//   if (foundedUser) {
//     if (foundedUser.password !== password) {
//       console.log("parol xato");
//     }
//  else {
//     console.log("sizga ruxsat bor");
//   }
//  }

//   return foundedUser ? "l" : "foydalanuvchi topilmadi"
// }

// console.log(login("ali@gmail.com", "ali111"));

//----------------------------------- amaliyot 6 dars 2 masala

// function beshharfli(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 5) {
//       newArr[newArr.length] = arr[i];
//     }
//   }
//   return newArr;
// }

// console.log(beshharfli(["qandaysan", "fruit", "nima gap", "hello"]));

//----------------------------------- amaliyot 6 dars 4 masala

// kiritilgan so'zlarni teskari yozish

// function bbc(arr) {
//   let array = [];

//   let str = "";
//   for (const zamon of arr) {
//     for (let i = zamon.length - 1; i >= 0; i--) {
//       str += zamon[i];
//     }
//     array[array.length] = str;
//     str = "";
//   }
//   return array;
// }

// console.log(bbc(["qandaysan", "nima gap", "fruit", "hello"]));

// 5 masala

// kiritilgan so'zlarni bosh harfi b dan boshlanadigan so'zlarni alohida erreyga solish

// function bbc(arr) {

//     let result = []

//     for (const zamon of arr) {

//          if (zamon.toLowerCase()[0] === "b") {
//             result[result.length] = zamon
//          }

//     }
// return result
// }

// console.log(bbc(["exem", "Board", "right", "black"]));

// ----------------------------7 dars 2 masala amaliydan

// to'g'rilab ishlash kerak

// function arraygaozgartirish(obj, num) {
//   let array = [];
//   for (const key in obj) {
//     array[array.length] = obj[key];

//     if (obj[key] === num) {
//       // array[array.length] = obj[key]
//       array[array.length] = true;
//     }
//     else {
//       array[array.length] = false;
//     }
//   }
//   return array;
// }

// console.log(arraygaozgartirish({ a: 13, b: 1 }, 13));

// 3 masala

// function bbc(arr, element) {
// let topilganIndex = -1

// for (let kamon = 0; kamon < arr.length; kamon++) {
//  if (element === arr[kamon]) {
//     topilganIndex = kamon
//  }
// }

// return topilganIndex
// }

// console.log(bbc(["salom", "alik", "nima", "qani"], "alik"));

// 4 masala

// function bbc(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let item = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = item;
//       }
//     }
//   }
// return arr
// }

// console.log(bbc([34, 55, 111, 23, 543, 234]));

//------------------------------------- suvini siqib magzini olomiz forni

// let arr = [34, 55, 111, 23, 543, 234]
// let arr = [34, 55, 4, 5]

// for (let fan = 0; fan < arr.length; fan++) {

//    }

// let bbc = ["salom", "alik", "nima", "qani"];

// for (let i = 0; i < bbc.length; i++) {
//     console.log(bbc[i]);
// }

// let bbc = ["salom", "alik", "nima", "qani"];

// for (let soz of bbc) {
//     console.log(soz);
// }

// let bbc = ["salom", "alik", "nima", "qani"];

// for (let i = 0; i < bbc.length; i++) {
//     let soz = bbc[i];
//     for (let j = 0; j < soz.length; j++) {
//         console.log(soz[j]);
//     }
// }

// let bbc = ["salom", "alik", "nima", "qani"];

// let natija = "";

// for (let i = 0; i < bbc.length; i++) {
//     natija += bbc[i];
//     if (i !== bbc.length) {
//         natija += " ";  // so'zlar orasiga bo'sh joy qo'shish
//     }
// }

// console.log(natija);

// ---------------------------amaliy ish

// function bbc(arr) {
//   let sum = "";
//   for (let qosh = 0; qosh < arr.length; qosh++) {
//     sum += arr[qosh];
//     if (qosh !== arr.length - 1) {
//       sum += " ";
//     }
//   }

//   let total = [];
//   let dan = ""
//   let kerakmas = ""

//   for (let i = 0; i <= sum.length; i++) {

//     if (sum[i] === " ") {

//   }else{
//     total += +sum[i]
//   }
//   dan += total

//   total = ""
// }
//   return dan;
// }

// console.log(bbc([34, 55, 23, 22]));

// -------------------------o'zini ichida o'zi mavjud bo'lsa includisni kodda yozilgani

// function bbc(num) {
//   let arr = [];
//   let ikkinchi = {};
//   let uch = []

//   for (let sonlari = 0; sonlari < num.length; sonlari++) {
//     if (!ikkinchi[num[sonlari]]) {

//       ikkinchi[num[sonlari]] = true;

//       arr[arr.length] = num[sonlari];
//     }
//   else {
//     uch[uch.length] = "_"
//   }
// }

// let result = [...arr, ...uch]
//   return result
// }

// console.log(bbc([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// --------------------arrayga istalgan joyiga yangi qiymat qo'shish kodda

// let arr = [10, 20, 30];
// let yangiQiymat = 25
// let joy = 1; // 1-pozitsiyaga qo'yamiz (20 dan keyin)

// for (let i = arr.length; i > joy; i--) {
//   arr[i] = arr[i - 1]; // hammasini orqaga suramiz
// }

// arr[joy] = yangiQiymat;

// console.log(arr); // [10, 25, 20, 30]

// ----------------arrayga istalgan joyiga yangi qiymat qo'shish kodda faqat olgandan kamroq

// let mevalar = ['Olma1', 'Olma2', 'Olma3', 'Olma4', 'Olma5', 'Olma6', 'Olma7'];

// // Boshlanish indeksi va kesiladigan son
// let boshlanishIndeksi = 3; // 4-chi olma
// let nechtaKesilsin = 2;    // 2 ta olma olinadi
// let yangiMeva = 'Nok1';    // 1 ta yangi meva qo‘shamiz

// // 1️ O‘chirilganlardan keyingi elementlarni orqaga suramiz
// for (let i = boshlanishIndeksi + nechtaKesilsin; i < mevalar.length; i++) {
//   mevalar[i - (nechtaKesilsin - 1)] = mevalar[i];
// }

// // 2️ Yangi mevani joyiga qo‘yamiz
// mevalar[boshlanishIndeksi] = yangiMeva;

// // 3️ Uzunlikni kamaytiramiz
// mevalar.length = mevalar.length - (nechtaKesilsin - 1);

// //  Natija
// console.log(mevalar);

// agar 2 ta kesish kerak bo'lsa

// let mevalar = ['Olma1', 'Olma2', 'Olma3', 'Olma4', 'Olma5', 'Olma6', 'Olma7'];

// // Shartlar
// let boshlanishIndeksi = 3; // 4-chi olma
// let nechtaKesilsin = 3;    // 3 ta o‘chiramiz
// let yangiMevalar = ['Nok1', 'Nok2']; // 2 ta qo‘shamiz

// // 1️ O‘chirilganlardan keyingi elementlarni orqaga surish
// for (let i = boshlanishIndeksi + nechtaKesilsin; i < mevalar.length; i++) {
//   mevalar[i - (nechtaKesilsin - yangiMevalar.length)] = mevalar[i];
// }

// // 2️ Yangi mevalarni joyiga qo‘shish
// for (let i = 0; i < yangiMevalar.length; i++) {
//   mevalar[boshlanishIndeksi + i] = yangiMevalar[i];
// }

// // 3️ Uzunlikni yangilash
// mevalar.length = mevalar.length - (nechtaKesilsin - yangiMevalar.length);

// //  Natija
// console.log(mevalar);

//-------------------------------------------- o'rganib chiqqan zalal qilmaydi o'zim ishlagan masala

// function bbc(str, str2) {
//   if (str.includes(str2)) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// console.log(bbc("know", "nows"));
// console.log(bbc("sadbutsad", "ad"));

// ------------------------------------------------functionsiya berib ishlatib ko'rish kerak

// 11 dars 8 masala

// function koplikQil(sozlar) {
//   let natija = [];

//   for (let i = 0; i < sozlar.length; i++) {
//     let sanash = 0;

//     for (let j = 0; j < sozlar.length; j++) {
//       if (sozlar[i] === sozlar[j]) sanash++;
//     }

//     let num = "";

//     if (sanash > 1) {
//       num += sozlar[i] + "s";
//     } else {
//       num += sozlar[i];
//     }
//     console.log(num);

//     if (!natija.includes(num)) natija.push(num);

// // function bbc(num) {
// //   let arr = [];
// //   let ikkinchi = {};
// //   let uch = []

// //   for (let sonlari = 0; sonlari < num.length; sonlari++) {
// //     if (!ikkinchi[num[sonlari]]) {

// //       ikkinchi[num[sonlari]] = true;

// //       arr[arr.length] = num[sonlari];
// //     }
// //   else {
// //     uch[uch.length] = "_"
// //   }
// // }

// // let result = [...arr, ...uch]
// //   return result
// // }console.log(bbc([0, 0, "bir", "bir", "bir", 2, 2, 3, 3, 4]));

//   }
//   return natija;
// }

// console.log(koplikQil(["cow", "pig", "cow", "cow"]));

// -----------------------------------------dastructiringni o'rganish kerak 9 dars 10 chi minutlarda keladi

// const restaurant = {
//   name: "Rayhon Milliy Taomlari",
//   lacation: "Tashkent",
//   categories: ["national", "fast food", "european cuisine", "turkish"],
//   startMenu: ["somsa", "lagmon", "salad", "soup"],
//   mainMenu: ["osh", "norin", "manti"],

//   Qudratdan: function (startMenuIndex, mainMenuIndex) {
//     return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
//   },
// };

// const [starter, main] = restaurant.Qudratdan(3, 1)

// console.log(starter, main);

// // --------------------------------------------------------------obyektdagi default velue darsda yaxshi tushuntirilmagan ekan jptidan o'rgan

// const {menu = [23], starterMenu: birinchiMenu = [34]}

// console.log(menu, birinchiMenu);

// imtihon

// 6 masala

// function bbc(arr) {

//     let sum = []

// for (let i = 0; i < arr.length; i++) {

// }

// return sum

// }

// console.log(bbc(["salom", "nima", "gap"]));

// imtihon

// 1 masala

// function bbc(birinchi, oxirgi) {

//   let kiritma = birinchi * oxirgi;

// let index = 0;
//   let sum = []

//   for (let i = birinchi; i <= kiritma; i += birinchi) {

//    sum[index] = i;
//     index ++;
//   }
//   return sum;
// }

// console.log(bbc(3, 5));

// ------------------------------------------------------yangi masala

// function bbc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let son = 0;
//     let number = arr[i];
//     // let index = i

//     while (number > 0) {
//       let hozirgi = number % 10;
//       son += hozirgi;
//       number = (number - hozirgi) / 10;
//     }
//     result[i] = son;
//   }

//   return result;
// }

// console.log(bbc([3421, 53, 101, 36]));

// function bbc(arr) {
//   let sum = [];
//   let son = 1;
//   for (let i = 0; i < arr.length; i++) {
//     let inchisi = arr[i];

//     while (inchisi > 0) {
//       let hozirgi = inchisi % 10;

//       inchisi = (inchisi - hozirgi) / 10;
//       son *= hozirgi;
//     }
//     sum[i] = son;
//     son = 1;
//   }

//   return sum;
// }

// console.log(bbc([342, 53, 101, 36]));


// --------------------------------------amaliyot 1 dan 9 gacha Dars

// harf larni objda chiqarish kerak 

// let str = "Hello World"

// let result = {}
// let sum = "" 
// for (let i = 0; i < str.length; i++) {
   
// // console.log("index: ", i, "harif:", str [i]);
// if (str[i] !== " ") {
//     sum += str[i] += sum += i
//     result[i] = sum
//     sum = ""
// }
// }

// console.log(result);



// --------------------------------------amaliyot 1 dan 9 gacha Dars

//-------------------------------------- objda chiqarish



// let harf = "abcdefghijklmnopqrstuvwxyz"

// let obj = {}

// for (let i = 0; i < harf.length; i++) {

// obj[i + 1] = harf[i]
  
// }

// console.log(obj);



// --------------------------------------amaliyot еуые лфеефыш



// function simulateNumberProcess(original) {
//   console.log(`\n=== SIMULYATSIYA BOSHLANDI (${original}) ===`);
  
//   let number = original;
//   let sum = 0;
//   let multiplier = 10;
//   let temp = 0;
//   let newNumber = 0;
//   let steps = [];

//   // 1️⃣ Raqamlar yig‘indisini bosqichma-bosqich olish
//   while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = (number - digit) / 10;
//     steps.push({
//       phase: "Raqam yig‘ish",
//       digit,
//       sum,
//       number,
//       temp: "-",
//       multiplier: "-",
//       newNumber: "-"
//     });
//   }

//   // 2️⃣ Multiplierni aniqlash
//   temp = sum;
//   steps.push({
//     phase: "Multiplier boshlanishi",
//     digit: "-",
//     sum,
//     number: "-",
//     temp,
//     multiplier,
//     newNumber: "-"
//   });

//   while (temp >= 10) {
//     multiplier *= 10;
//     temp = (temp - temp % 10) / 10;
//     steps.push({
//       phase: "Multiplier oshirish",
//       digit: "-",
//       sum,
//       number: "-",
//       temp,
//       multiplier,
//       newNumber: "-"
//     });
//   }

//   // 3️⃣ Yangi son hosil qilish
//   newNumber = original * multiplier + sum;
//   steps.push({
//     phase: "Yangi son hosil qilish",
//     digit: "-",
//     sum,
//     number: "-",
//     temp: "-",
//     multiplier,
//     newNumber
//   });

//   // 4️⃣ Har bir bosqichni 1 sekundda chiqaramiz
//   steps.forEach((step, i) => {
//     setTimeout(() => {
//       console.clear();
//       console.log(`\n Bosqich ${i + 1} / ${steps.length}`);
//       console.table([step]);
//       if (i === steps.length - 1) {
//         console.log(`\n Yakuniy natija: ${original} → ${newNumber}`);
//       }
//     }, i * 1000);
//   });
// }

// // 🧠 Sinov uchun:
// simulateNumberProcess(324);



// --------------------------------------amaliyotni davomi



// function bbc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     console.log(`\n=== ${i + 1}-ELEMENT BOSHLANDI (${arr[i]}) ===`);
//     let number = arr[i];
//     let original = number;
//     let sum = 0;
//     let steps = []; // jadval uchun massiv

//     // 1️⃣ Raqamlarni yig'indisini topamiz
//     while (number > 0) {
//       let digit = number % 10;
//       sum += digit;
//       number = (number - digit) / 10;

//       // Har bir bosqichni jadvalga yozamiz
//       steps.push({
//         step: steps.length + 1,
//         phase: "Raqam yig‘ish",
//         digit: digit,
//         sum: sum,
//         number: number,
//         temp: "-",
//         multiplier: "-",
//         newNumber: "-"
//       });
//     }

//     // 2️⃣ Multiplierni aniqlaymiz
//     let multiplier = 10;
//     let temp = sum;

//     steps.push({
//       step: steps.length + 1,
//       phase: "Multiplier boshlanishi",
//       digit: "-",
//       sum: sum,
//       number: "-",
//       temp: temp,
//       multiplier: multiplier,
//       newNumber: "-"
//     });

//     while (temp >= 10) {
//       multiplier *= 10;
//       temp = (temp - temp % 10) / 10;

//       steps.push({
//         step: steps.length + 1,
//         phase: "Multiplier oshirish",
//         digit: "-",
//         sum: sum,
//         number: "-",
//         temp: temp,
//         multiplier: multiplier,
//         newNumber: "-"
//       });
//     }

//     // 3️⃣ Yangi sonni hosil qilamiz
//     let newNumber = original * multiplier + sum;

//     steps.push({
//       step: steps.length + 1,
//       phase: "Yangi son hosil qilish",
//       digit: "-",
//       sum: sum,
//       number: "-",
//       temp: "-",
//       multiplier: multiplier,
//       newNumber: newNumber
//     });

//     // 🔹 Jadvalni chiqaramiz
//     console.table(steps);

//     console.log(`✅ Natija: ${original} → ${newNumber}`);
//     result[result.length] = newNumber;
//   }

//   console.log(`\n=== BARCHA NATIJALAR ===`);
//   console.table(result.map((r, i) => ({ index: i + 1, result: r })));

//   return result;
// }

// // 🧠 Sinov uchun:
// bbc([342, 1111, 72, 24, 31, 17]);


// ---------------------------------------------------------arrayga teskari solish

// -------------------------------------------------js 2 oy 1 dars dw 5 masala

// palindrom qiymatlarni olish

// function bbc(str) {
//   let ong = "";
//   let chap = "";
//   let arr = [];
//   let teskari = [];
//   let result = [];
//   let arrTog = [];
//   for (let i = 0; i < str.length; i++) {
//     ong += str[i];

//     arrTog[arrTog.length] = ong; // [ 's', 'so', 'sos', 'sosm', 'sosma' ]
//   }
//   let h = "";
//   let x = [];
//   let sanash = 0;
//   for (let l = 0; l < arrTog.length; l++) {
//     if (arrTog.length === arrTog.length && sanash === 0) {
//       x[l] = arrTog[l];

//     } else if (sanash > 0) {
//       x[l] = arrTog[arrTog.length - arrTog.length + sanash];

      
//     }
//     sanash++;
//   }

// //   for (let k = x.length - 1; k >= 0; k--) {
// //     chap += x[k];

// //     teskari[teskari.length] = chap; // [ 'a', 'am', 'ams', 'amso', 'amsos' ] // agar teskari[teskari.length] bo'lsa orqasiga qo'shib ketadi // tajriba uchun // console.log(chap);
// //     chap = "";
// //   }

//   let suzma = [];
//   for (const element of x) {
//     let sum = "";

//     for (let el = element.length - 1; el >= 0; el--) {
//       sum += element[el];
//     }
//     suzma[suzma.length] = sum; // [ 's', 'os', 'sos', 'msos', 'amsos' ]
    
//   }

//   let qiymat = []
//   for (const solishtirish1 of arrTog) {
//     for (const solishtirish2 of suzma) {
//       if (solishtirish1 === solishtirish2)
//         qiymat[qiymat.length] = solishtirish2
//     }
    
//   }

//   return suzma;
//   //    str[str.length - 1 - 1];
// }
// console.log(bbc("sosma"));


// ----------------------------------------------------objdagi qiymatlarni qo'shish

// function bbc(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let obj = arr[i];
//         for (const key in obj) {
//             let val = Number(obj[key]); // har qanday qiymatni son qilib olish
//             if (!isNaN(val)) {          // NaN bo'lmasa qo'shish
//                 sum += val;
//             }
//         }
//     }

//     return sum;
// }

// console.log(
//   bbc([
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: "30" },
//     { name: "Olim", age: "twenty" },
//     { score: "15" }
//   ])
// );

// ------------------------------------------------substringni tushunish uchun

// function bbc(str) {
//   let sum = "";

//   for (let i = 0; i < str.length; i++) {
//     let string = "";
//     console.log(`\n🌀 Boshlanish i = ${i}, harf = '${str[i]}'`);

//     for (let j = i; j < str.length; j++) {
//       let harf = str[j];
//       let takror = false;

//       console.log(`   🔹 J = ${j}, tekshirilayotgan harf = '${harf}'`);

//       // K sikl - harf ilgari string ichida bormi?
//       for (let k = 0; k < string.length; k++) {
//         console.log(`      🔸 K = ${k}, taqqoslash '${string[k]}' === '${harf}'`);
//         if (string[k] === harf) {
//           takror = true;
//           console.log(`      ⚠️  Takror topildi ('${harf}') -> break`);
//           break;
//         }
//       }

//       // Agar takror topilsa — j siklni to‘xtatamiz
//       if (takror) {
//         break;
//       } else {
//         string += harf;
//         console.log(`      ✅ Qo‘shildi: string = "${string}"`);
//       }
//     }

//     // Eng uzun takrorlanmagan substringni yangilash
//     if (string.length > sum.length) {
//       sum = string;
//       console.log(`👉 Hozircha eng uzun = "${sum}"`);
//     }
//   }

//   console.log(`\n🏁 Yakuniy eng uzun substring: "${sum}"`);
//   return sum;
// }

// bbc("abcabcbb");

// ------------------------------------------------substringni tushunish uchun

// function bbc(str) {
//   let sum = "";

//   for (let i = 0; i < str.length; i++) {
//     let string = "";
//     console.log(`\n🌀 Boshlanish i = ${i} (${str[i]})`);

//     for (let j = i; j < str.length; j++) {
//       let harf = str[j];
//       let takror = false;

//       console.log(`   🔹 J = ${j}, harf = '${harf}'`);
      
//       // k sikl: harf stringda bor-yo'qligini tekshiradi
//       for (let k = 0; k < string.length; k++) {
//         console.log(`      🔸 K = ${k}, string[${k}]='${string[k]}'`);
//         if (string[k] === harf) {
//           takror = true;
//           console.log(`      ⚠️  Takror topildi ('${harf}')`);
//           break; // bu break faqat k siklni to‘xtatadi
//         }
//       }

//       if (takror) {
//         console.log(`   ❌ Takror topildi → j-sikl to‘xtaydi`);
//         break; // bu break j siklni to‘xtatadi
//       } else {
//         string += harf;
//         console.log(`   ✅ Qo‘shildi: string="${string}"`);
//       }
//     }

//     if (string.length > sum.length) {
//       sum = string;
//       console.log(`👉 Eng uzun hozir: "${sum}"`);
//     } else {
//       console.log(`👉 Eng uzun o‘zgarmadi: "${sum}"`);
//     }
//   }

//   console.log(`\n🏁 Yakuniy eng uzun substring: "${sum}"`);
//   return sum;
// }

// bbc("abcabcbb");

// -------------------------------------------asinxron va sinxron

// --------------------------------------------sinxron ishlashi

// function nonPishirish() {
//   return new Promise((resolve) => {
//     console.log("🍞 Non pishirish boshlandi...");
//     setTimeout(() => {
//       console.log("✅ Non pishdi!");
//       resolve("Non tayyor");
//     }, 2000); // 2 soniya
//   });
// }

// function choyQaynatish() {
//   return new Promise((resolve) => {
//     console.log("☕ Choy qaynatish boshlandi...");
//     setTimeout(() => {
//       console.log("✅ Choy tayyor!");
//       resolve("Choy tayyor");
//     }, 1000); // 1 soniya
//   });
// }

// function dasturxonYozish() {
//   return new Promise((resolve) => {
//     console.log("🍽️ Dasturxon yozilmoqda...");
//     setTimeout(() => {
//       console.log("✅ Dasturxon yozildi!");
//       resolve("Dasturxon tayyor");
//     }, 500); // 0.5 soniya
//   });
// }

// async function tayyorlanishKetmaket() {
//   console.log("Ishlar ketma-ket boshlandi...\n");

//   const non = await nonPishirish();
//   const choy = await choyQaynatish();
//   const dasturxon = await dasturxonYozish();

//   console.log("\n🍽️ Hammasi tugadi!");
//   console.log(non, choy, dasturxon);
// }

// tayyorlanishKetmaket();

// ---------------------------------------------------asinxron ishlashi

// function nonPishirish() {
//   return new Promise((resolve) => {
//     console.log("🍞 Non pishirish boshlandi...");
//     setTimeout(() => {
//       console.log("✅ Non pishdi!");
//       resolve("Non tayyor");
//     }, 2000); // 2 soniya
//   });
// }

// function choyQaynatish() {
//   return new Promise((resolve) => {
//     console.log("☕ Choy qaynatish boshlandi...");
//     setTimeout(() => {
//       console.log("✅ Choy tayyor!");
//       resolve("Choy tayyor");
//     }, 1000); // 1 soniya
//   });
// }

// function dasturxonYozish() {
//   return new Promise((resolve) => {
//     console.log("🍽️ Dasturxon yozilmoqda...");
//     setTimeout(() => {
//       console.log("✅ Dasturxon yozildi!");
//       resolve("Dasturxon tayyor");
//     }, 500); // 0.5 soniya
//   });
// }


// async function tayyorlanishParallel() {
//   console.log("Ishlar parallel boshlandi...\n");

//   const [non, choy, dasturxon] = await Promise.all([
//     nonPishirish(),
//     choyQaynatish(),
//     dasturxonYozish()
//   ]);

//   console.log("\n🍽️ Hammasi tugadi!");
//   console.log(non, choy, dasturxon);
// }

// tayyorlanishParallel();

// -----------------------------------------------------

// let sum = [
//   [ [ 0, 1 ], [ 21, 43 ], 29 ],
//   [ [ 0, 2 ], [ 21, 11 ], -3 ],
//   [ [ 0, 3 ], [ 21, 45 ], 31 ],
//   [ [ 0, 4 ], [ 21, 4 ], -10 ],
//   [ [ 0, 5 ], [ 21, 32 ], 18 ],
//   [ [ 0, 6 ], [ 21, 54 ], 40 ],
//   [ [ 1, 2 ], [ 43, 11 ], 19 ],
//   [ [ 1, 3 ], [ 43, 45 ], 53 ],
//   [ [ 1, 4 ], [ 43, 4 ], 12 ],
//   [ [ 1, 5 ], [ 43, 32 ], 40 ],
//   [ [ 1, 6 ], [ 43, 54 ], 62 ],
//   [ [ 2, 3 ], [ 11, 45 ], 21 ],
//   [ [ 2, 4 ], [ 11, 4 ], -20 ],
//   [ [ 2, 5 ], [ 11, 32 ], 8 ],
//   [ [ 2, 6 ], [ 11, 54 ], 30 ],
//   [ [ 3, 4 ], [ 45, 4 ], 14 ],
//   [ [ 3, 5 ], [ 45, 32 ], 42 ],
//   [ [ 3, 6 ], [ 45, 54 ], 64 ],
//   [ [ 4, 5 ], [ 4, 32 ], 1 ],
//   [ [ 4, 6 ], [ 4, 54 ], 23 ],
//   [ [ 5, 6 ], [ 32, 54 ], 51 ]
// ]

// let kichik = sum[0][2]


// for (let i = 0; i < sum.length; i++) {
// if (kichik > 0 && sum[i][2] > 0) {
//     if (kichik > sum[i][2]) {
//         kichik = sum[i][2]
//     }
//     }
// }

// let result = []
// for (const element of sum) {
//     // console.log(element[2]);
//     console.log(kichik.includes(element[2]));
    
//     // if (element[2].includes(kichik)) {
//     //     result[result.length] = element[1]
//     // }
    
// }

// console.log(kichik);



// let kichik = 11
// let sum = [21, 43, 11, 45, 4, 32, 54]
// let res = []
// for (let i = 0; i < sum.length; i++) {
//    if(sum[i] === kichik) {
//     res.push(kichik)
//    }
// }

// console.log(kichik);


// let sum = [
//   [ [ 0, 2 ], [ 21, 11 ], -15 ],
//   [ [ 0, 4 ], [ 21, 4 ], -12 ],
//   [ [ 2, 4 ], [ 11, 4 ], -22 ],
//   [ [ 4, 5 ], [ 4, 32 ], -1 ]
// ]

// let kichik = sum[0][2]


// for (let i = 0; i < sum.length; i++) {
//     if (kichik < sum[i][2]) {
//         kichik = sum[i][2]
//     }
    
// }

// console.log(kichik);

// ------------------------------------------

// function makeCounter() {
//   let count = 0; // ichki o‘zgaruvchi (faqat makeCounter ichida mavjud)

//   function increment() {
//     count++;
//     console.log("Hozirgi qiymat:", count);
//   }

//   return increment; // ichki funksiyani tashqariga qaytaramiz
// }

// const counter = makeCounter(); // endi counter() — ichki increment()ni bildiradi

// counter(); // Hozirgi qiymat: 1
// counter(); // Hozirgi qiymat: 2
// counter(); // Hozirgi qiymat: 3

// -------------------------------------------------------

// function makeStorage() {
//   let value = []; // ichki o‘zgaruvchi
//   return {
//     set(newValue) {
//       value[value.length] = newValue;
//       console.log("Yangi qiymat saqlandi:", value);
  
//     },
//     get() {
//       return value
//     }
//   };
// }

// const storage = makeStorage();

// storage.set([25, 14]);      // Yangi qiymat saqlandi: 42
// console.log(storage.get()); // 42

// ------------------------------------------------

// function outerFunction(a) {
//     let x = a; // ichki o‘zgaruvchi
    
//     function innerFunction(b) {
//         console.log("Natija:", x );
//   }

//   innerFunction(); // ichkaridagi funksiya chaqirildi
// }
// outerFunction(6); // Natija: 15


