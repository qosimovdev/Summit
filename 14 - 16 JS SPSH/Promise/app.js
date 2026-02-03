// let a
// setTimeout(() => {
//     a = 10
// }, 2000)

// console.log(a);


// let sonChiqar = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(.5)
//         reject(3)
//     }, 2000)
// })

// sonChiqar
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))


let iceCreame = new Promise((resolve, reject) => {
    let shopOpen = false
    setTimeout(() => {
        if (shopOpen) {
            resolve("Shop ochiq")
        } else {
            reject("Shop yopiq musqaymoq ololmaysan xaxaxaxaxa.")
        }
    }, 2000)
})

iceCreame
    .then(data => console.log(data))
    .catch(err => console.log(err))