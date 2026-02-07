// function salom() {
//     console.log("salom");
// }
// salom()

// async function malumotOl() {
//     await console.log("malumot tayyor");
// }
// malumotOl()

const baseURL = "https://68fb5c6694ec96066025c8da.mockapi.io/products"

async function getProducts() {
    try {
        const res = await fetch(baseURL)
        const data = await res.json()
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
getProducts()


// fetch(baseURL)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log("xatolik, ", err))
// console.log("2");