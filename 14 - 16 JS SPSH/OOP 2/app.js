//1) Encapsulation (Ma’lumotni yashirish)

// class User {
//     #parol
//     constructor(name, parol) {
//         this.name = name
//         this.#parol = parol
//     }
//     checkPassword(input) {
//         return input === this.#parol
//     }
// }

// const name = prompt("Ismini to'liq kirit i******")
// const password = prompt("Parol kirit")
// const user1 = new User("ibrohim", "123")

// if (name === user1.name) {
//     alert("Urraaa kirildi")
// } else {
//     alert("Afsuski kirol mading battar bo'l xaxaxaxa")
// }
// alert(`mening ismim ${user1.name}, parol ${user1.checkPassword("123")}`)



//2) Abstraction (Murakkablikni yashirish)

// class Car {
//     start() {
//         this.#checkFuel();
//         this.#startEngine();
//         console.log("Mashina yurdi 🚗");
//     }

//     #checkFuel() {
//         console.log("Yoqilg'i tekshirildi");
//     }

//     #startEngine() {
//         console.log("Motor ishga tushdi");
//     }
// }

// const car1 = new Car();
// car1.start();


// Inheritance (Meros olish)

// class Animal {
//     speak() {
//         console.log("Hayvon ovoz chiqardi");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Vov vov 🐶");
//     }
// }

// const dog1 = new Dog();
// dog1.speak(); // meros oldi
// dog1.bark();


// Polymorphism (Bir xil method, har xil natija)

// class Animal {
//     speak() {
//         console.log("Hayvon gapirdi");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Miyov 🐱");
//     }
// }

// class Cow extends Animal {
//     speak() {
//         console.log("Moo 🐮");
//     }
// }

// const cat = new Cat();
// const cow = new Cow();

// cat.speak();
// cow.speak();
