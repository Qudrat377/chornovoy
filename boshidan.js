// function bbc() {

// }

// console.log(bbc())

// --------------------------------------------------1 dars

// 1 masala

// function bbc(soat) {

//     return soat * 60
// }
// console.log(bbc(1));

// 2 masala

// function bbc(ism, yosh) {
//     return [yosh, ism.toLocaleUpperCase()]
// }

// console.log(bbc("qudrat", 23))

// 3 masala

// function bbc(ism, yosh) {

// let res = ism
// let rew = yosh
// let result = res===rew

// return typeof result
// }

// console.log(bbc("qudrat", 23))

// 4 masala

// function bbc(son, num) {

// let result = son += num

// return result
// }

// console.log(bbc(2, 5))

// 5 masala

// function bbc(son, num, num1) {

// let result = son += num += num1

// return result / 3
// }

// console.log(bbc(4, 5, 6))

// 6 masala

// function bbc(son, num) {

// let result = son *= num

// return result
// }

// console.log(bbc(2, 5))

// 7 masala

// function bbc(son, num) {

// let result = son /= num

// return result
// }

// console.log(bbc(15, 5))

// 8 masala

// function bbc(son, num) {

// let result = son *= son
// let res = num *= num

// return result += res
// }

// console.log(bbc(4, 5))

// 9 masala

// function bbc(son, num) {

// let avval = son *= son *= son
// let res = num *= num *= num
// let result = 0
// if (avval > res) {
//     result = avval -= res
// }else{
//     result = res -= avval
// }

// return result
// }

// console.log(bbc(3, 2))

// 10 masala

// function bbc(son, num) {

// let avval = son *= son *= son
// let res = num *= num *= num
// let result = 0
// if (avval > res) {
//     result = avval * res
// }else{
//     result = res * avval
// }

// return result
// }

// console.log(bbc(3, 2))

//------------------------------------------------- 2 dars

// 1 masala

// function bbc (num) {
//     let sum = null
//     if (num < 0) {
//         sum = "manfiy"
//     }else {
//         sum = "musbat"
//     }
// return sum
// }

// console.log(bbc(9));

// 2 masala

// function bbc(bir, ikki) {
//   let sum = 0;

//   if (bir > ikki) {
//     sum = bir;
//   } else {
//     sum = ikki;
//   }
//   return sum;
// }

// console.log(bbc(5,2));

// 3 masala

// function bbc(bir) {
//   let sum = ""

//   if (bir === 0) {
//     sum = "kiritilgan son 0"
//   } else if(bir < 0){
//     sum = "kiritilgan son 0 dan kichik"
//   } else {
//     sum = "kiritilgan son 0 dan katta"
//   }
//   return sum;
// }

// console.log(bbc(0));

// 4 masala

// function bbc(bir, ikki) {
//   let sum = ""

//   if (bir === ikki) {
//     sum = "kiritilgan sonlar teng"
//   } else {
//     sum = "kiritilgan sonlar teng emas"
//   }
//   return sum;
// }

// console.log(bbc(5,5));

// 5 masala

// function bbc(bir) {
//   let sum = ""
// if (bir % 3 === 0 && bir % 5 === 0) {
//     sum = "FIZZBuzz"
//   }
//  else if (bir % 3 === 0) {
//     sum = "Fizz"
//   } else if(bir % 5 === 0) {
//     sum = "Buzz"
//   }
//   return sum;
// }

// console.log(bbc(15));

// 6 masala

// function bbc(bir) {
//   let sum = ""

//   if (bir <= 18) {
//     sum = "hali yishsiz"
//   } else {
//     sum = "haydovchilik guvahnomasini olasiz"
//   }
//   return sum;
// }

// console.log(bbc(22));

// 7 masala

// function bbc(bir) {
//   let sum = "";
//   if (bir === 1) {
//     sum = "dushanbaz";
//   } else if (bir === 2) {
//     sum = "seshanba";
//   } else if (bir === 3) {
//     sum = "chorshanba";
//   } else if (bir === 4) {
//     sum = "payshanba";
//   } else if (bir === 5) {
//     sum = "juma";
//   } else if (bir === 6) {
//     sum = "shanba";
//   } else if (bir === 7) {
//     sum = "yakshanba";
//   }
//   return sum;
// }

// console.log(bbc(5));

// 8 masala

// function bbc(bir) {
//   let sum = bir % 10;

//   if (sum % 2 === 0) {
//     return "juft son";
//   } else {
//     return "toq son";
//   }
// }

// console.log(bbc(225));

// 9 masala

// function bbc(bir) {
//   if (bir > 0) {
//     return (bir += 1);
//   } else {
//     return (bir -= 2);
//   }
// }

// console.log(bbc(-225));

// 10 masala

// function bbc(bir) {
//   let sum = 0
// for (let i = 0; i < bir.length; i++) {

//   if (bir[i] > 0) {
//    sum ++
//   }
// }
//     return sum
// }

// console.log(bbc([225, -32, 45, -56, 33]));

//--------------------------------------------------- 3 dars

// 1 masala

// function bbc(bir) {
//   let sum = []
// for (let i = bir; i >= 0; i--) {
//     if (i % 2 != 0) {
//     sum[sum.length] = i
//     }
// }
//     return sum
// }

// console.log(bbc(13));

// 2 masala

// function bbc(bir) {
//   let sum = 0;
//   for (let i = 0; i <= bir; i++) {
//     if (i % 2 === 0) {
//       sum = sum + i;
//     }
//   }

//   return sum;
// }

// console.log(bbc(6));

// 3 masala

// function bbc(bir) {
//   let sum = []
// for (let i = bir; i >= 0; i--) {
//     sum[sum.length] = i
// }
//     return sum
// }

// console.log(bbc(13));

// 4 masala

// function bbc(bir) {
//   let sum = 1
//   for (let i = 0; i <= bir; i++) {
//     if (i % 2 !== 0) {
//       sum = sum * i;
//     }
//   }

//   return sum;
// }

// console.log(bbc(7));

// 5 masala

// function bbc(bir) {
//   let sum = []
//   for (let i = 0; i <= bir; i++) {
//     if (i % 2 === 0) {
//       sum[sum.length] = i;
//     }
//   }

//   return sum;
// }

// console.log(bbc(50));

// 6 masala

// function bbc(str) {

//   return str.length
// }

// console.log(bbc("Hello World"));

// 6 masala boshqa variant

// function bbc(str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       sum ++
//       console.log(str[i], i);

//     }
//   }

//   return sum;
// }

// console.log(bbc("Hello World"));

// 7 masala

// function bbc(str) {
//   let sum = ""
//   for (let i = str.length-1; i >= 0; i--) {
//     sum += str[i]
//   }

//   return sum;
// }

// console.log(bbc("Hello World"));

// 8 masala

// function bbc(num) {
//   let sum = []
//   for (let i = 0; i <= num; i++) {
//     if (i % 3 !== 0) {
//       sum[sum.length] = i
//     }
//   }

//   return sum;
// }

// console.log(bbc(20));

// 9 masala

// function bbc(num) {
//   let sum = num.toString()
//   return sum.length
// }

// console.log(bbc(12345678777777777));

// 10 masala

// function bbc(str) {
//   let sum = {}
//   for (let i = 0; i < str.length; i++) {
// sum[i + 1] = str[i]
//   }

//   return sum;
// }

// console.log(bbc("abcdefghijklmnopqrstuvwzxy"));

// 11 masala

// function bbc(num, son) {
//   let sum = num / son;
//   if (sum > 0) {
//     return true;
//   }

//   return false;
// }

// console.log(bbc(-6, 3));

// 12 masala

// function bbc(num) {
//   if (num > 100) {
//     return "100 dan katta";
//   } else if (num === 100) {
//     return "100 teng";
//   } else {
//     return "100 dan kichik";
//   }
// }

// console.log(bbc(100));

// 13 masala

// function bbc(guvohnoma, fokus) {
//   if (guvohnoma === fokus) {
//     return "ishgaqabul qilindingiz";
//   }  else {
//     return "kira olmadingiz";
//   }
// }

// console.log(bbc(true, true));

// 14 masala

// function bbc(rang, odamBor,) {
//   if (rang === "yashil" && odamBor === false) {
//     return "yuring";
//   } else if (rang === "yashil" && odamBor === true) {
//     return "odamni o'tkazib keyin yuring";
//   }
//   else if (rang === "qizil"){
//     return "to'xtang";
//   }
// }

// console.log(bbc("qizil", false));

// 15 masala

// function bbc(ball) {
//   if (ball <= 100 && ball >= 80) {
//     return "budjet";
//   } else if (ball >= 70 && ball <= 80) {
//     return "kantrakt";
//   } else if (ball >= 60 && ball <= 70) {
//     return "super kantrakt";
//   } else {
//     return "yiqildingiz";
//   }
// }

// console.log(bbc(80));

// -----------------------------------------------------4 dars

// 1 masala

// function bbc(arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//        sum += arr[i]
//        console.log(sum);

//     }

// return sum / arr.length
// }

// console.log(bbc([2, 5, 8, 3, 7, 8, 6, 5, 2]));

// 2 masala

// function bbc(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// console.log(bbc([2, 5, 8, 3, 7, 8, 6, 5, 2]));

// 3 masala

// function bbc(str) {
//   let natija = "";
//   let katta = true;

//   for (let i = 0; i < str.length; i++) {
//     let belgi = str[i];

//     if (katta && belgi !== " ") {
//       natija += belgi.toUpperCase();
//       katta = false;
//     } else {
//       natija += belgi;
//     }
//     if (belgi === " ") {
//       katta = true;
//     }
//   }
//   return natija;
// }

// console.log(bbc("salom hammaga"));

// 4 masala

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

// 5 masala

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

// 6 masala

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

// 7 masala

// function bbc(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];

//     if (typeof item === "object" && item !== null) {
//       for (const key in item) {
//         result[result.length] = item[key];
//       }
//     } else {
//       result[result.length] = item;
//     }
//   }
//   let sum = 0;
//   for (let j = 0; j < result.length; j++) {
//     if (result[j] >= 0 || result[j] <= 9) {
//       sum += result[j];
//     }
//   }

//   return sum / arr.length;
// }

// console.log(
//   bbc([
//     { name: "Ali", age: 7 },
//     { name: "Vali", age: 5 },
//     { name: "Olim", age: 3 },
//   ])
// );

// 8 masala

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

// 9 masala

// function bbc(arr) {

//     let sum  = []
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//     sum.push(arr[i])
//    }
// }
// return sum
// }

// console.log(bbc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 10 masala

// function bbc(arr) {
//   let sum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum.push(arr[i]);
//     }
//   }
//   return sum;
// }

// console.log(bbc([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ------------------------------------------------------------5 dars

// 1 masala

// sonni yaxlitlash va musbatlash

// function bbc(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let dallol = arr[i];
//     if (dallol < 0) {
//       sum[sum.length] = dallol = -dallol;
//     } else {
//       sum[sum.length] = dallol;
//     }
// }
// let rouded = sum.map(num => Math.round(num))

//   return rouded;
// }

// console.log(bbc([3.02, -3.65, 5, -9]));

// 2 masala

// sonni kubi

// function bbc(num) {
//   return num * num * num;
// }

// console.log(bbc(3));

// 3 masala

// juft va toqlar yig'indisi alohida

// function bbc(num) {
//   let sum = 0;
//   let toq = 0;
//   const result = [];
//   for (let i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     } else {
//       toq += i;
//     }
//   }
//   result[result.length] = `juft sonlar: ${sum} toq sonlar ${toq}`;

//   return result;
// }

// console.log(bbc(5));

// 4 masala

// oldingi harfni orqaga o'tkazish

// function bbc(str) {
//   let sum = "";
//   let oxiriga = "";
//   let sanash = 0;
//   for (let i = 0; i < str.length; i++) {
//     let dallod = str[i];
//     if (dallod !== " " && sanash === 0) {
//       oxiriga += dallod;
//       sanash++;
//     } else if (dallod !== " ") {
//       sum += dallod;
//     }
//   }
//   return (sum += oxiriga);
// }

// console.log(bbc("     tJavascrip     "));

// 5 masala

// ikkisi teng bo'lsa qo'shib ikkiga ko'paytirish

// function bbc(son, num) {
//   let sum = 0;
//   if (num === son) {
//     sum = (num += son) * 2;
//   } else {
//     sum = son += num;
//   }
//   return sum;
// }

// console.log(bbc(2, 3));

// 6 masala

// arrdagi sonlarni yig'indisi

// function bbc(arr) {
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]
// }
// return sum
// }

// console.log(bbc([2, 5, 7, 10]));

// 7 masala

// yaxlitlab beradi

// function bbc(num) {
// let sum = Math.round(num)

// return sum
// }

// console.log(bbc(34.000));

// 8 masala

// arrdagi sonlarni eng kattasi

// function bbc(arr) {
// let num = 0
// for (let i = 0; i < arr.length; i++) {
//  let   sum = arr[0]
//  if (sum <= arr[i]) {
//     num = arr[i]
//  }
// }
// return num
// }

// console.log(bbc([11, 5, 7, 12]));

// 9 masala

// arrdagi sonlarni eng kichigini topish

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

// 10 masala

// ikki arraydagi sonlarni eng kattasi topish

// function bbc(arr, array) {
//   let num = [];
//   let sum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     num.push(arr[i]);
//   }
//   for (let j = 0; j < array.length; j++) {
//     num.push(array[j]);
//   }
//   for (let k = 0; k <= num.length; k++) {
//     if (sum <= num[k]) {
//       sum = num[k];
//     }
//   }

//   return sum;
// }

// console.log(bbc([11, 5, 1, 12], [111, 4, 6, 2, 99, 44, 11]));

// ---------------------------------------------------------6 dars

// 1 masala

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

// 2 masala

// ikki argumetdagison yig'ondisi yoki biri o'mga teng bo'lsa true aks holda fa;se

// function bbc(son, num) {
//   if (son + num === 10) {
//     return true;
//   } else if (son === 10 || num === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bbc(9, 1));

// 3 masala

// SSttrriinngg shu tartibda chiqarilsin

// function bbc(str) {

//     let sum = ""
//     for (let i = 0; i < str.length; i++) {
//       sum += str[i] += str[i]
//     }
// return sum
// }

// console.log(bbc("String"));

// 4 masala

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

// 5 masala

// function bbc(ovoz, qarshiOvoz) {
//   return ovoz - qarshiOvoz;
// }

// console.log(bbc(2, 33));

// 6 masala

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

// 7 masala

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

// 8 masala

// sonlarni tengligini aniqlash typegacha

// function bbc(num, son) {
//   if (num === son) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bbc(2, 2));

// 9 masala

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

// 10 masala

// factorialni topish

// function bbc(factorial) {
// let sum = 1
// for (let i = 1; i <= factorial; i++) {
//   sum *= i
// }
// return sum
// }

// console.log(bbc(6));

// ----------------------------------------------------7 dars


