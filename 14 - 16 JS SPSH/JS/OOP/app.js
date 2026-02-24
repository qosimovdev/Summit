// OOP-Object-Oriented Programming(Objectga Yonaltirilgan Dasturlash)

// OOP- bu malumotlarni objectlar orqali qurish usuli.

// let robot1 = {
//     ismi: 'Ahror',
//     rangi: 'oq',
//     narxi: '100$',
//     salomlash: function () {
//         alert(`Salom men robot ${this.ismi}`);
//     },
//     narxiniAytish() {
//         alert(`Meni narxim ${this.narxi}`)
//     }
// };
// robot1.salomlash();
// robot1.narxiniAytish()

// let robot2 = {
//     ismi: 'Alex',
//     rangi: 'Qora',
//     narxi: '1000$',
//     matn: 'bla bla bla',
//     salomlash: function () {
//         alert(`Salom men ${this.ismi} man, rangim ${this.rangi} narxim ${this.narxi}`);
//     },
//     kuyla: function () {
//         alert(this.matn);
//     },
// };
// robot2.salomlash()
// robot2.kuyla()

class Robot {
    ismi;
    rangi;
    narxi;
    matn;
    salomlash() {
        alert(`Salom men ${this.ismi}`);
    }
}

let robot1 = new Robot();
robot1.ismi = 'Reflex';
robot1.rangi = 'Oq';
robot1.narxi = '100$';
robot1.salomlash();
console.log(robot1);

setTimeout(() => {
    let robot2 = new Robot();
    robot2.ismi = 'Alex';
    robot2.rangi = 'Qora';
    robot2.narxi = '1250$';
    robot2.matn = 'bla bla bla';
    robot2.salomlash();
}, 2000);

// OOP 4ta tamoyinlari

// 1 - Encapsulation - "Ichki sirlar", Robotning ichida "sirli quti" bor. U yerda masalan: parol, narx, matn saqlanadi.
// tashqaridan bu narsalarni o'zgartirb bolmaydi.

// 2 - Abstraction - "Faqat keraklisini ko'ramiz, qolganini e'tiborga olmaymiz"
// Shunaqa qilib, faqat kerakli funksiyalarni ko'rinadi qolgan murakkab funksiyalar ungacha bolgan yashirin turadi object ichida

// 3 - Inheritance - "Meros olish(Robot farzandlari - Robot1-Robot2 lar)"

// 4 - Polymorphism - "Har biri o'ziga yarasha salomlashadi"
// Hammada salomlash() funksiyasi bor, lekin har kim har xil salomlashadi berilgan qiymatga qarab ozgaradi