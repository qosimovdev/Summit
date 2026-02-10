// async function test() {
//     return "Hello";
// }

// test()
//     .then(res => console.log(res));


async function test() {
    try {
        await Promise.reject("XATO")
    } catch (err) {
        console.log(err);
    }
}

test()