// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000);

// setInterval(() => {
//     console.log("Her saniye çalşacağım");    
// }, 1000);

// const hi = () => console.log("Hello");      // Hello

// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello");    Bir fonksiyona parametre olarak fonksiyon gönderdiğimiz için asıl fonksiyonumuz callBack function olarak çalışır
// })      // Hello

import fetch from "node-fetch";
import axios from "axios";

//  

/*
    Fetch işlemlerini belli bir sırada gerçekleştirmek için fetchleri art arda yazdık. Karmaşık olmasını isteseydik her fetchi ayrı
    yazardık
*/

// Çok fazla fetch işlemi karışık gelebilir bu yüzden "async / await" i kullanacağız.

// async function getData() {
    // const users = await (
    //     await fetch("https://jsonplaceholder.typicode.com/users")
    // ).json();

    // const post1 = await (
    //     await fetch("https://jsonplaceholder.typicode.com/posts/1")
    // ).json();

    // const post2 = await (
    //     await fetch("https://jsonplaceholder.typicode.com/posts/2")
    // ).json();

    // console.log("users", users);
    // console.log("post1", post1);
    // console.log("post2", post2);
// }
// getData();


// (async () => {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

/* Asenkron fonksiyonumuzu herhangi bir fonksiyon tanımlaması kullanmadan direkt çalıştırabilmek için anonim fonksiyon
yapısı kullanılabilir. */


//  P R O M I S E  \\

// With Fetch
// const getUsers = () => {
//     return new Promise(async (resolve,reject) => {
//         await fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(err => reject(err));
//     });
// }

// With Axios
const getUsers = () => {
    return new Promise(async (resolve,reject) => {
        const response = await axios("https://jsonplaceholder.typicode.com/users");
        // reject("Hata1");
        resolve(response.data);
    });
}

const getPost = (post_id) => {
    return new Promise(async (resolve,reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        // reject("Hata2");
        resolve(data);
    });
}

// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(1);
    
//         console.log(users);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }

// })();

// Bütün Promiseleri yazdırma
Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);

