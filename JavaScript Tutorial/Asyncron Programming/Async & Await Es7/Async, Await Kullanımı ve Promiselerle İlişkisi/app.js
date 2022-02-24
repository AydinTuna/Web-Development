// async function test(data) {
//     return data;
// }

// console.log(test("Merhaba"));   // Promise {<fulfilled>: 'Merhaba'}
// test("Merhaba").then(response => console.log(response));    // Merhaba

// async komutu mutlaka bir Promise objesi döndürür.

// async function test(data) {
//     return new Promise((resolve,reject) => {
//         resolve(data);
//     });
// }
// test("Merhaba").then(response => console.log(response));     // Merhaba

// async function test(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         },5000);
//     });

    // let response = await promise;   // 5 sn bekleyecek
    // console.log(response);
    // console.log("Naber");

//     return response;
// }
// test("Merhaba").then(response => console.log(response));
// test("Merhaba");

// async function testData(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string") {
//                 resolve(data);
//             } else {
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },5000);
//     });

//     const response = await promise;
//     return response;    
// }

// testData("Merhaba")
// .then(data => console.log(data))
// .catch(err => console.error(err));

async function getCurrency(url) {
    const response = await fetch(url);  // Response Object

    const data = await response.json(); // Json Object

    return data;
}

getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=2167c7787c3ebc21ada49eae3397ca5e&format=1");

