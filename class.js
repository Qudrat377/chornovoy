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
