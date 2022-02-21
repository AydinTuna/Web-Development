// function getData(data) {    // Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject) {
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data);
//             } else {
//                 // Olumsuz
//                 reject(new Error("Lütfen \"string\" bir değer giriniz!"));
//             }
//         },5000);
//     });
// }

// getData(31).then(function(response) {
//     console.log("Girilen Değer: " + response);
// }).catch(function(err) {
//     console.error(err);
// });

// Daha Düzenli hali

// getData("Merhaba")
// .then(response => console.log("Girilen Değer: " + response))
// .catch(err => console.log(err));


function addTwo(number) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Lütfen bir sayı girin!"));
            }
        },5000);
    });
}

addTwo("2")
.then(response => {
    console.log(response);
    return response + 2;
})
.then(response2 => console.log(response2))
.catch(err => console.error(err));