
// ----------------------------------------stringni macht metodi

// stringdagi qiymatni yaroqli qilish

// let str = "43salom2"

// let regex = /^[a-zA-Z0-9]+$/g

// if(str.match(regex)) {
//     console.log("yaroqli qiymat");

// }else {
//     console.log("yaroqsiz qiymat");

// }

// -----------------macht

// let str = "I love JavaScript";

// let result = str.match(/Java(Script)/);

// // console.log(result[0]);
// // console.log( result[1] )
// console.log( result );

// -------------------------yana misollar macht metodiga

// let str = "<h1>Hello, world!</h1>"
// let regexp = "<(.*?)>";

// let machtAll = str.matchAll(regexp);

// console.log(machtAll);

// machtAll = Array.from(machtAll)

// let firstMatch = machtAll[0]
// console.log(firstMatch[0]);
// console.log(firstMatch[1]);
// console.log(firstMatch.index); 0
// console.log(firstMatch.input);

//---------------------------------------- replase string metodi stringdagi so'zlarni almashtirib beradi

// let str = "smm mmm mma wwa wff wtf wkf smm"

// console.log(str.replace("smm", "backend"));      // // bittasini almashtirib beradi
// console.log(str.replaceAll("smm", "backend"));   // // hammasini almashtirib beradi

// ---------------------------------------test metodi

// let str = "I love JavaScript";

// console.log(/love/i.test(str));
// console.log(str.search(/love/i) != -1);

// -----biroz tushunarsiz

// let regexp = /love/gi

// let str = "I love JavaScript";

// regexp.lastIndex = 10
// console.log( regexp.test(str));
