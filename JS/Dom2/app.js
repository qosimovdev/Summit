// const img = document.querySelector("img")
// img.setAttribute("src", "./Iphone.webp")
// img.setAttribute("alt", "iphone rasmi")
// // get atribute atribute ichidagi qiymatni qaytaradi.
// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));
// const link = document.getElementById("link")
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("style"));

// // remove() document dangi elementni o'chiradi
// const h1 = document.querySelector("h1")
// h1.remove()

// // HTML element yaratishda ishlatiladi
// // const p = do cument.createElement("p")
// // p.textContent = "salom"
// // container.appendChild(p)
// // const container = document.querySelector(".container")

// const container = document.querySelector(".container")
// // const img = document.createElement("img")
// img.setAttribute("src", "./Iphone.webp")
// container.appendChild(img)


// // addEventListener - elementga hodisa masalan (click) qo'shib u sodir bo'ganda nimadur o'zgarishini buyuradi
// const btn = document.getElementById("btn")
// btn.addEventListener("click", () => {
//     alert("Bosildi")
// })




const container = document.querySelector(".container")
const btn = document.getElementById("btn")
const h1 = document.querySelector("h1")

btn.addEventListener("click", () => {
    if (container.style.backgroundColor === "white") {
        container.style.backgroundColor = "black"
        h1.textContent = "rangi qora bo'ldi"
    } else {
        container.style.backgroundColor = "white"
        h1.textContent = "rangi oq bo'ldi"
    }
})