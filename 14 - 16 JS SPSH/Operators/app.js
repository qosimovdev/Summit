// == qiymatni o'zini tekshiradi qiymat teng bo'sa true qaytaradi
// console.log(5 == "5");
// === qiymat va turini tekshiradi agar qiymat teng bo'lib turi birxil b'lmasa false qaytaradi
// console.log(5 === "5");

// ++ qiymatga 1 qo'shadi
// a++
// -- qiymatdan 1 ayiradi
// a-- 
// console.log(a);

// % bu operator qoldig'li bo'lish operatori va bizga qoldig'ni
// console.log(4 % 2);

// ** darajaga oshiradi 
// console.log(a ** 4);

// Mantiqiy operatorlar
// 1) && and operatori 2 ta qiymat ham true bolsagina true qaytaradi aks xolda false
// console.log(true && false);

// console.log(true && true);
// let a = 5
// console.log(!(a > 3) && a < 4);// false
// console.log(!(a > 3) && !(a < 4));// false

// 2) || yoki operatori 2 ta qiymatdan 1 tasi true bolsa yetarlik true qaytaradi
// console.log(true || false); // true
// console.log(!(a > 3) || !(a < 4)) // true
// console.log(!(a > -3) || !(a < 4))// true
// console.log(!(a > 3) || !(true || false))// false
// console.log(!(a > 3) || (true && false))// false
// console.log(((false && true)) || (true && false))//false
// console.log(((false && true) || true) || (true && false))//true
// console.log(((false && true) && true) || (true || false))//false
// console.log(((false && true) || !true) && (true || false))//false

// 3) ! bu operator emas degan manoni bildiradi.
// console.log(!true);  //false

// Taqqoslash operatori
// let a = 5;
// let b = 6
// console.log(a > b);
// console.log(a < !b);
// console.log(a != b);
// console.log(a >= b);
// console.log(a <= b);

// let x = a + b
// console.log(x);
// console.log(a -= b);

// if and else bu shart operatori
// let a = 5;
// let b = 8

// if (a - b == 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let a = 18;
// let b = 19;

// if (a > b) {
//     console.log("a katta: ", a);
// } else if (b > a) {
//     console.log("b katta: ", b);
// } else {
//     console.log("2 ta son ham teng");
// }
// // ternary operator
// let resul = a > b ? "a katta " : "b katta"
// console.log(resul);

// for loop - 0 dan berilgan qiytmat gacha sonlarni chop etadi
// let i = 0 - boshlang'ich qiymat
// i <= 10 - shart (10 ga teng yoki kichik bo'lgunicha davom etadi)
// i++ - har safar 1 ga oshiradi

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// let text = "Salom"
// for (let i = 0; i <= 4; i++) {
//     console.log(text);
// }

// for (let i = 10; i <= 20; i++) {
//     console.log(i ** 3);
// }


// Argument va parametr - funksiyalarga beriladigan qiymatlar
// Parametr - funksiyaning e'lonida ko'rsatilgan o'zgaruvchilar
// Argument - funksiyani chaqirganda beriladigan qiymatlar
// function add(x, y) {
// return x + y;
// }
// let result = add(5, 3); // 5 va 3 - argumentlar
// // console.log(result); // 8

// function text(salom) {
//     for (let i = 0; i <= 4; i++) {
//         console.log(salom);
//     }
// }
// text("salomlar")

// function text(talaba) {
//     if (true) {
//         console.log(talaba);
//     } else {
//         console.log(false);
//     }
// }
// text("talabalar")