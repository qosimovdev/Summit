const girls = [
    {
        name: "Laylo",
        age: 18,
        birthday: "20.10.2008",
        height: 178,
        address: "Namangan Chorsu",
        phoneNumber: "+998905552233",
        language: [
            {
                uz: "Expert",
                en: "Elite",
                ru: "Beginner"
            }
        ]
    },
    {
        name: "Laylo",
        age: 18,
        birthday: "20.10.2008",
        height: 178,
        address: "Namangan Chorsu",
        phoneNumber: "+998905552233",
        language: [
            {
                uz: "Expert",
                en: "Elite",
                ru: "Beginner"
            }
        ]
    }
]

const container = document.querySelector(".container")

girls.forEach(item => {
    const div = document.createElement("div")
    div.className = "girl"

    const lang = item.language[0]

    div.innerHTML = `
        <h3>Name: ${item.name}</h3>
        <h3>Age: ${item.age}</h3>
        <h3>Birthday: ${item.birthday}</h3>
        <h3>Height: ${item.height}</h3>
        <h3>Address: ${item.address}</h3>
        <h3>Phone: ${item.phoneNumber}</h3>
        <h3>UZ: ${lang.uz}</h3>
        <h3>EN: ${lang.en}</h3>
        <h3>RU: ${lang.ru}</h3>
    `
    container.appendChild(div)
})
