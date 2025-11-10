// --------------------------------------------1 masala

// classlarga kirish

// class Product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }
//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`price: ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax)
//     }
// }

// let salesTax = 0.05

// let product1 = new Product("shirt", 19.99)

// product1.displayProduct()

// let total = product1.calculateTotal(salesTax)

// console.log(`Totol price (with tax): $${total.toFixed(2)}`);

// --------------------------------------------------------2 masala

// animal classini ochish name, species maydonlarini qo'shish va Dog Cat Lion metodlarini qo'shish

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   speak() {
//     console.log(`${this.name} ovoz chiqaradi`);
//   }
// }

// class Dog extends Animal {
//  get speak() {
//     console.log(`${this.name} hav-hav qiladi`);
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(`${this.name} miyov-miyov qiladi`);
//   }
// }

// class Lion extends Animal {
//   speak() {
//     console.log(`${this.name} o'kiradi`);
//   }
// }

// let dog = new Dog("Bobik", "it")
// dog.speak

// let cat = new Cat("sharik", "mushuk")
// cat.speak()

// -------------------------------------------------------------3 masala

// product class price maydon va istalgan metod qo'shish

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   static filterByPrice(product, maxPrice) {
//     // return product.filter(p => p.price <= maxPrice);
//     let sum = [];
//     for (const element of product) {
//       for (const key in element) {
//         if (element[key] <= maxPrice) {
//           sum.push(element);
//         }
//       }
//     }
//     return sum;
//   }
// }

// let products = [
//   new Product("telefon", 200),
//   new Product("noutebuk", 800),
//   new Product("soat", 50),
// ];

// console.log(Product.filterByPrice(products, 300));

// -----------------------------------------------------------4 masala

// users clasini ochish name, species maydonlarini qo'shish va login va logout metodlarini qo'shish

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//     this.loggedIn = false;
//   }
//   login(userName, passWord) {
//     if (userName === this.username && passWord === this.password) {
//       this.loggedIn = true;
//       return "Tizimga kirish muvofaqiyatli yakunlandi";
//     } else if (passWord !== this.password) {
//       return "parol xato";
//     } else if (userName !== this.username) {
//       return "loginda xatolik";
//     }
//   }
//   logout() {
//     this.loggedIn = false;
//     return "Tizimdan chiqildi!";
//   }
// }

// let log = new User("Qudart", 3434);

// console.log(log.login("Qudart", 3434));
// console.log(log.logout());

// --------------------------------------------------5 masala

// flight class filghtNumber, departureTime, destination maydon va bookSeat(), canelSeat(),getAvailableSeats() metodlar

// class Filght {
//   constructor(filghtNumber, departureTime, destination) {
//     this.filghtNumber = filghtNumber;
//     this.departureTime = departureTime;
//     this.destination = destination;
//     this.isBooked = false;
//   }
//   bookSeat() {
//     if (this.isBooked) {
//       console.log(`parvoz ${this.filghtNumber} allaqachon band qilingan`);
//     } else {
//       this.isBooked = true;
//       console.log(`parvoz ${this.filghtNumber} muvaffaqiyatli band qilindi`);
//     }
//   }
//   canelSeat() {
//     if (!this.isBooked) {
//       console.log(`parvoz ${this.filghtNumber} hali band qilinmagan`);
//     } else {
//       this.isBooked = false;
//       console.log(`parvoz ${this.filghtNumber} bandi bekor qilindi`);
//     }
//   }
//   getAvailableSeats() {}
// }

// let yolovchilar = [
//   new Filght(1, 10.0, "1100km"),
//   new Filght(2, 10.0, "1100km"),
//   new Filght(3, 10.0, "1100km"),
//   new Filght(4, 10.0, "1100km"),
//   new Filght(5, 10.0, "1100km"),
// ];

// function bookFlightByNumber(filghtNumber) {
//   let Filght = yolovchilar.find((f) => f.filghtNumber === filghtNumber);
//   if (Filght) {
//     Filght.bookSeat();
//   } else {
//     console.log("Bunday raqamli ,parvoz topilmadi");
//   }
// }
// function cancelFlightByNumber(filghtNumber) {
//   let flight = yolovchilar.find((f) => f.filghtNumber === filghtNumber);
//   if (flight) {
//     flight.canelSeat();
//   } else {
//     console.log(`bunday raqamli parvoz topilmadi`);
//   }
// }

// function getAvailableFlights() {
//   return yolovchilar.filter((f) => !f.isBooked);
// }

// bookFlightByNumber(2);
// bookFlightByNumber(2);
// cancelFlightByNumber(2);

// -------------------------------------------------6 masala

// course class CourseName, couseCode maydon va addStudent, removeStudent metodlari

// let student = []

// class Course {
//   constructor(CourseName, couseCode) {
//     this.CourseName = CourseName
//     this.couseCode = couseCode
//     this.students = []
//   }
//   addStudend(studentName) {
//     this.students.push(studentName)
//     console.log(`${studentName} kursga qo'shildi`);

//   }
//   removeStudent(studentName) {
// this.students = this.students.filter(s => s !== studentName)
// console.log(`${studentName} kursdan o'chirildi`);
//   }
// }

// const course = new Course("JavaSkript", "JS101")

// course.addStudend("Qudrat")
// course.addStudend("Vali")
// course.removeStudent("vali")

// ----------------------------------------------------7 masala

// Wallet class balance maydon addFunds, speanFunds metodlar

// class Wallet {
//     constructor(balance) {
//         this.balance = balance
//     }

//     addFunds(velue) {
// this.balance += velue
// console.log(this.balance);

//     }
//     spendFunds(value) {
//         if (this.balance > 0 && value > 0 && this.balance >= value) {
//           this.balance -= value
//         }

//     }
// }

// let popolnit = new Wallet(0)

// popolnit.addFunds(200)
// popolnit.spendFunds(32)
// console.log(popolnit);

// --------------------------------------------------8 masala

// notification class message date maydon va sendNotification clearNatafication metod

// class Notification {
//     constructor(message, date) {
//         this.message = message = []
//         this.date = date
//     }
//     sendNotification(value) {
// this.message = value
// this.date = Date.now()
//     }
//     clearNotification() {
// this.message = ""
// this.date = 0
//     }
// }

// let xabar = new Notification("sms")
// xabar.sendNotification("qachon kelasan")
// xabar.sendNotification("soat nechi bo'ldi")
// // xabar.clearNotification()
// console.log(xabar);

// ---------------------------------------------------9 masala

// stack clasi push, pop metodlari

// class Stack {
//   constructor() {
//     this.items = []; // bu yerda biz elementlarni saqlaymiz
//   }

//   // 🔹 yangi element qo‘shish
//   push(value) {
//     this.items[this.items.length] = value;
//     return this.items; // yangi massivni qaytaradi
//   }

//   // 🔹 oxirgi elementni o‘chirish
//   pop() {
//     if (this.items.length === 0) {
//       return "Stack bo‘sh!";
//     }
//     const res = this.items[this.items.length - 1];
//     this.items.length = this.items.length - 1;
//     return res; // o‘chirilgan elementni qaytaradi
//   }

//   // 🔹 stack bo‘sh yoki yo‘qligini tekshirish
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // 🔹 stackdagi barcha elementlarni ko‘rish
//   show() {
//     return this.items;
//   }
// }

// // 🔸 Stack obyektini yaratamiz
// let s = new Stack();

// console.log(s.push(10));  // [10]
// console.log(s.push(20));  // [10, 20]
// console.log(s.push(30));  // [10, 20, 30]

// console.log("Pop qilindi:", s.pop()); // 30
// console.log("Hozirgi holat:", s.show()); // [10, 20]

// console.log("Bo‘shmi:", s.isEmpty()); // false
