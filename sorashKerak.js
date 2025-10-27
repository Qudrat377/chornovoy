// const restaurant = {

//     name: "Rayhon Milliy Taomlari",
//     lacation: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagmon', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti'],
    
//     openingHours: {

//         mon: {
//             open: 8,
//             close: 22
//         },

//         tue: {
//             open: 8,
//             close: 23
//         },
        
//         mon: {
//             open: 9,
//             close: 21
//         },

//     },
// }

// const newRestaurant = { ...restaurant, founder: "John Deo", year: 2017 }

// console.log(newRestaurant);


// -------------------------------------------------



// let arr = [34, 55, 23, 27];

// let newarr = [];
// // let str = ""

// let sum = "";
// for (let qosh = 0; qosh < arr.length; qosh++) {
//   sum += arr[qosh];
//   if (qosh !== arr.length - 1) {
//     sum += " ";
//   }
// }

// // console.log(sum);

// let dan = [];
// let total = "";

// for (let i = 0; i < sum.length; i++) {
//   // console.log(i);

//   if (sum[i] === " ") {
//     // console.log("teng");
    
//     total = "";

//   } else {
//     // console.log("teng emas");
//     total += +sum[i];
//   }
// //   dan[dan.length] = +total;
//   console.log(total);
  
// }
// // console.log(dan);


// -----------------------------


// qo'shish

// let array = [3, 21, 5, 8];
// d = 0;
// for (let i = 0; i < array.length; i++) {
//   d = d + array[i];
// }

// console.log(d);


// -----------------11 dars 2 masala includessiz yechish


// 1 masala

// // includes metoddan foydalanmadim va jptdan ifga nima shart berishni so'radim qolgan joyini o'zim ishladim

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


// 2 masala

// includes metodidan birinchini ichidan ikkinchidan nimalar bo'lsa shuni topib bera olganligi uchun foydalandim 
// aks xolda tepadagi masala yordamida ham includesdan foydalanmasdan yechsa bo'lardi menimcha

// function bbc(str, str2) {
//   if (str.includes(str2)) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

// console.log(bbc("know", "nows"));
// console.log(bbc("sadbutsad", "ad"));


// ------------------------------------------------arrayga teskari qiymat solish


// palindrom qiymatlarni olish

// function bbc(str) {
//   let ong = "";
//   let chap = "";
//   let arr = [];
//   let teskari = [];
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     ong += str[i];

//     arr[arr.length] = ong; // [ 's', 'so', 'sos', 'sosm', 'sosma' ]
//   }

//   for (let k = str.length -1; k >= 0; k--) {
//    chap += str[k]

//    teskari[teskari.length] = chap  // [ 'a', 'am', 'ams', 'amso', 'amsos' ]
//   }

//   let hozirgi = ""
//   for (let h = str.length -1; h >= 0; h--) {
//     hozirgi += str[h]

//    result[h] = hozirgi  //[ 'amsos', 'amso', 'ams', 'am', 'a' ]
// }

//   let togri = ""
//   let arrTog = []
//   for (let j = 0; j < str.length; j++) {
//    togri += str[j]
//      arrTog[arrTog.length] = togri
// //    togri = ""

// }


//   let suzma = [];
//   for (const element of x) {
//     let sum = "";

//     for (let el = element.length - 1; el >= 0; el--) {
//       sum += element[el];
//     }
//     suzma[suzma.length] = sum; // [ 's', 'os', 'sos', 'msos', 'amsos' ]
//   }


//   return result

// }
// console.log(bbc("sosma"));

// ---------------------------------------------3 oy 4 dars 5 masala 

// ikki arrayni bir biriga solishtiring
// o'zim ishladim lekin nimaga to'g'ri ishlayotganiga tushunmadim (:

// function bbc(arr, array) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (arr[i] !== array[j]) {
//           i++;
//           sum.push(arr[i]);
//           sum.push(array[j]);
//       }
//     }
//   }
//   return sum;
// }

// console.log(bbc([2, 4, 1], [2, 3, 8]));