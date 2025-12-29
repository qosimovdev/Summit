// console.log(Math.round(4.6));// 5
// console.log(Math.floor(4.9));// 4
// console.log(Math.ceil(4.1));// 4
// console.log(Math.trunc(4.9));// 4
// console.log(Math.max(2, 5, 8));
// console.log(Math.min(2, 6, 7));
// console.log(Math.pow(9, 7));// 
// console.log(Math.sqrt(100)); // 
// console.log(Math.floor(Math.random() * 20) + 1);

// let text = "Salom,dunyo"
// length uzunligini hisoblab beradi
// console.log(text.length); 

// toUpperCase hamma harflarni kattada qiberadi
// console.log(text.toUpperCase());


// toLowerCase hamasini kichik qiberadi.
// console.log(text.toLowerCase());

// slice startdam end gacha bo'lgan oralig'ni olib beradi.
// console.log(text.slice(0, 2));

// console.log(text.substring(0, 2));

// includes qidiradi
// console.log(text.includes('a'));

// indexOf berilgan qiymat bo'yicha qaysi index da ekanligini aniqlab beradi.
// console.log(text.indexOf("a"));

// replace o'zgartirmoqchi bo'lgan so'z bilan yangi so'zni yoziladi
// console.log(text.replace("Salom", "nma gap"));

// console.log(text.split(","));

// console.log(text.trim());

// console.log(text.concat(" ", " JS"));

// console.log(text.charAt(0));

// console.log(text.repeat(200000));

// console.log(text.lastIndexOf("m"));// salom dunyo


// let a = Number(prompt("a sonni kirit"))
// let b = Number(prompt("b sonni kirit"))
// let result = a + b
// console.log(result);



let a = Number(prompt("a sonni kiriting"));
let amal = prompt("+ - * / shulardan birini kiriting");
let b = Number(prompt("b sonni kiriting"));

let result;

if (amal === "+") {
    result = a + b;
} else if (amal === "-") {
    result = a - b;
} else if (amal === "*") {
    result = a * b;
} else if (amal === "/") {
    result = a / b;
} else {
    console.log("Noto'g'ri amal kiritildi");
}

console.log(result);

