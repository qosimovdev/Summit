// // pop(), push(), shift(), unshift(), filter(), find(), reverce(), sort(), slice(), splice()


// // some() array ichida hech bo'lmasa 1 ta element shartga mos kelsa true qaytaradi
// let num = [3, 7, 9, 5];
// let result = num.some(num => num === 10);
// console.log(result);

// // every() arraydagi barcha elementlar shartga mos kelsa true qaytaradi
// let arr = [4, 6, 8];
// let result2 = arr.every(e => e % 2 === 0);
// console.log(result2);

// // concat() 2 yoki undan ortiq arrayni 1 ta yangi arrayga birlashtiradi, arraylar ichidagi malumot o'zgarmaydi faqat birlashadi.
// // let a = [1, 2];
// // let b = [3, 4];
// let result3 = a.concat(b);
// console.log(result3);

// // join() array element larini stringga aylantiradi va orasiga belgi qoyadi
// let text = ["HTML", "CSS", "JS"];
// let result4 = text.join(", ");
// console.log(result4);

// // flat() array ichidagi arraylarni 1ta darajaga tushiradi
// let flat = [1, [2, 3], [4, 5]];
// let result5 = flat.flat();
// console.log(result5);

// // forEach() arrayda harbir element ustida amal bajaradi ammo natija qaytarmaydi.
// let numbers = [1, 2, 3];
// numbers.forEach(num => {
//     console.log(num * 3);
// });

// // map() arrayni aylanib harbir element ustida amal bajaradi va yangi array qaytaradi
// let numbers2 = [1, 2, 3];
// let result6 = numbers2.map(num => num * 2);
// console.log(result6);


// let nums = "1,2,3,5" // [1,2,3,5]
// let results = nums.split(",").map(elemet => Number(elemet))
// console.log(results);



// let masala1 = [1, 5, 6, -8, 1, 45, -9]
// let masala2 = [1, 5, 6, 8, 1, 45, 9]

// let a = [1, [2, 3]]
// let b = [[4, 5]]


// 1 Musbat sonni topib uni 2ga kopaytiring
let arr = [-3, 4, -1, 7];

// 2 Yangi element qo'shb, arrayni kichikdan kattaga tartiblang.
let arr2 = [3, 1, 4];

// 3 Oxirgi elementni o'chrib arrayni stringga aylantiring
let arr3 = [1, 2, 3, 4];

// 4 Boshidan element o'chirib, yangi element qo'shing.
let arr4 = [5, 6, 7];

// 5 Ikki arrayni birlashtirib ichki arraylarni bitta darajaga tushiring
let a = [1, [2, 3]];
let b = [[4, 5], 6];

// 6 Arrayni teskari qilib har bir elementni 2 ga ko'paytiring
let arr5 = [1, 2, 3, 4];

// 7 Faqat juft sonlardan yangi array hosil qiling va ularni kamayish tartibida joylang
let arr6 = [10, 15, 22, 33, 42, 55, 60];

// 8 Musbat sonlarni ajratib, ularni vergul bilan stringga aylantiring
let arr7 = [-1, 2, 3, -5];

// 9 Arraydagi eng katta sonni toping
let arr8 = [12, 5, 8, 21, 3];

// 10 Ichki arraylarni tekislab, musbat sonlarni ajrating
let arr9 = [1, [2, -3], [4, 5]];