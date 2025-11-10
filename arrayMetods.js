// --------------------------------------------flat 

// arrayni ichidagi arralarni tozalab beradi

// let arr = [12, true, [48, [false, [{a: 55}]]]]

// console.log(arr.flat(Infinity)); // infinity yoki chuqurligini aytish kerak

// // [ 12, true, 48, false, { a: 55 } ]

//---------------------------------- ARRAY ni METODLARI

// const arr = [43, 55, 13, 23, 11, 65]

//------------------------------------- indexni aniqlab beradi

// console.log(arr.indexOf(11));


// ----------------------------------- arrayni string qilish

// console.log(arr.join(""));

// -----------------------------------ikki arrayni bir biriga qo'shish

// const arr = [43, 55, 13, 23, 11, 65]
// const arr2 = [11, 77, 88]

// console.log(arr2.concat(arr));

// console.log(arr2);

// ----------------------------------kesish va o'chirish

// console.log(arr.slice(0, 4));

// console.log(arr.slice(-5, -3));

// console.log(arr);

// console.log(arr.splice(2, 3));

// console.log(arr);

// ----------------------------------- teskari qilish

// const arr = [43, 55, 13, 23, 11, 65]

// console.log(arr.reverse());

// console.log(arr);

//-------------------------------------- arrayni aylanish loop

// ----------------------------------------------forEach

// let years = [2000, 2001, 1998, 1990]

// let result = years.forEach(element => console.log(element))

// ---------------------------------------------map

// let years = [2000, 2001, 1998, 1990]

// let result = years.map((a, d, arr) => arr)

// console.log(result);

// // parametrlari----

// let yearss = [2000, 2001, 1998, 1990]
// let res = yearss.map(a => a + 1);
// console.log(res); // [2001, 2002, 1999, 1991]

// // parametrlari----

// let year = [2000, 2001, 1998, 1990]
// let resultt = year.map((a, d) => `Index ${d}: ${a}`);
// console.log(resultt);
// // ["Index 0: 2000", "Index 1: 2001", "Index 2: 1998", "Index 3: 1990"]

// // parametrlari----

// let resullt = years.map((a, d, arr) => arr.length);
// console.log(resullt); // [4, 4, 4, 4]

// --------------------------------arreydagi narsalarni yoyish boshqa arreyga spread operatori

// let arr = [23, 54, 12]

// let newArr = [arr[0], arr[1], arr[2]]

// let newArr = [44, ...arr]

// console.log(newArr);

// ---------------------------------------------------------------arraydan ichma ich destrakturing qilish

// const arr = [2, 4, [5, 6]]

// // const [i, j] = arr
// // console.log(i, j);

// const [i, , [j, k]] = arr
// console.log(i, j, k);

// --------------------------------------------defould velue destrakturing paytida yangi qiymat kiritish

// const arr = [2, 4, 44]

// let [a, b, c, d = 7] = arr

// console.log(d);
