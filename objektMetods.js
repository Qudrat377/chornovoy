//-------------------------------------------- Looping objekts: objekt keys, values, and entries

// obyektdan malumot olib arrayga solish metodlari

// let obj = {
//     a : "salom",
//     num : 88
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// ----------------------Obyekt ichidagi metodni boshqa bir obyekt ichida ishlatib beradigan metod--------Call and apply and bind

// let AirWays = {
//     title: "Uzbekistan Air Ways",
//     code: "HY",
//     booking: [],
//     book(name, seatNum) {


//       return this.booking.push(`${name} ${this.title}dan ${seatNum} o'rindiqni band qildi`)
//     }
// }

//--------------------------------------------------------- bind usuli


// let book = AirWays.book

// let ShaxriyorAirWays = {
//     title: "Shaxriyor Air Ways",
//     code: "SHA",
//     booking: [],
// }

// let result = book.bind(ShaxriyorAirWays)

// result("Sevgili", 3)

// console.log(ShaxriyorAirWays);


// -------------------------------------------------apply usuli

// let book = AirWays.book


// let BoltaboyAirWays = {
//     title: "Boltaboy Air Ways",
//     code: "BA",
//     booking: [],
// }

// book.apply(BoltaboyAirWays, ["Rustambek", 13])

// console.log(BoltaboyAirWays);





//--------------------------------------- call bilan chaqirish

// let TurkishAirWays = {
//     title: "Turkish Air Ways",
//     code: "TA",
//     booking: [],

// }

// book.call(TurkishAirWays, "Qudratbek", 5)

// console.log(TurkishAirWays);

// -----------------------------------------obyektlarni destrakturing qilish

// const restaurant = {
//   name: "Rayhon Milliy Taomlari",
//   lacation: "Tashkent",
//   categories: ["national", "fast food", "european cuisine", "turkish"],
//   startMenu: ["somsa", "lagmon", "salad", "soup"],
//   mainMenu: ["osh", "norin", "manti"],
//   openingHours: {
//     mon: {
//       open: 8,
//       close: 22,
//     },

//     tue: {
//       open: 8,
//       close: 23,
//     },

//     Wed: {
//       open: 9,
//       close: 21,
//     },
//   },
// };

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// // --------------------------------------------------------------obyektdagi default velue darsda yaxshi tushuntirilmagan ekan jptidan o'rgan

// const {menu = [23], starterMenu: birinchiMenu = [34]}

// console.log(menu, birinchiMenu);

// --------------------------------------------------------------ichma ich obyekt

// const restaurant = {
//   name: "Rayhon Milliy Taomlari",
//   lacation: "Tashkent",
//   categories: ["national", "fast food", "european cuisine", "turkish"],
//   startMenu: ["somsa", "lagmon", "salad", "soup"],
//   mainMenu: ["osh", "norin", "manti"],
//   openingHours: {
//     mon: {
//       open: 8,
//       close: 22,
//     },

//     tue: {
//       open: 8,
//       close: 23,
//     },

//     Wed: {
//       open: 9,
//       close: 21,
//     },
//   },
// };

// const {mon} = restaurant.openingHours
// // // // ichidagi propertiylarni destruksiya qilish
// console.log(mon)

// const {mon: {open, close}} = restaurant.openingHours
// console.log(open, close);

// ---------------------------------------------obyektni ichidagi malumotlarni desktruktsiya qilish 

// lekin objni qayta nomlab bo'lmaydi shuning uchun biz uni keylarini olamiz

//     const restaurant = {
//     name: "Rayhon Milliy Taomlari",
//     lacation: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagmon', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti'],
//     }

// // categories ichidagi birinchin ikkita elementni desktruktsiya qilish
// // categories ichidagi birinchin uchunchi elementni desktruktsiya qilish

// let [birinchi, ikkinchi, uchunchi] = restaurant.categories

// console.log(uchunchi);
