// Selectors
// getElementsByTagName() bu selectorimiz tag nomi bilan ushlab oladi 
// const body = document.getElementsByTagName("body")
// console.log(body);

// getElementsByClassName() Bir xil class ga ega bo'lgan barcha elementlarni oladi
// const title = document.getElementsByClassName("title")
// console.log(title);

// getElementById() Id orqali oladi
// const text = document.getElementById("salom")
// console.log(text);

// querySelector() Css selectori kabi yoziladi va birinchi topilan elementni qaytaradi (id, class, tag name)

// querySelectorAll() esa css selectoriga mos kelgan barcha elementlarni qaytaradi.
// const text = document.querySelector(".item")
// console.log(text);

const text = document.querySelectorAll(".item")
const result = text.forEach(item => {
    item.textContent = item.textContent + " darslari"
})
console.log(text);

// textContent element ichidagi matnni o'zgartirishda yoki qo'shishda ishlatamiz
const title = document.querySelector(".title")
title.textContent = "<i>Hello</i>"
title.style.color = "red"
title.style.fontSize = "60px"
// title.setAttribute("style", "color: blue")

// innerHTML element ichiga matn va HTML element qo'shishda yoki o'zgartirishda ishlatiladi.
const title2 = document.querySelector(".title2")
title2.innerHTML = "<i>Hello</i>"
title2.style.color = "green"
title2.style.fontSize = "60px"

const img = document.querySelector("img")
console.log(img);

// setAttribute() xossasini atribute qo'shishda ishlatamiz
img.setAttribute("src", "./Iphone.webp  ")
img.setAttribute("alt", "Buyerda Iphone rasmi bor")