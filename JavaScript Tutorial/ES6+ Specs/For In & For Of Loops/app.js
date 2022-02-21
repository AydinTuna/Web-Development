const person = {
    name : "Bahadır Tuna Aydın",
    age : 25,
    salary : 3000
};

const langs = ["JavaScript","Html","Css","Solidity"];

const pName = "Bahadır";

// for in

// for (let prop in person) {
//     console.log(prop, person[prop]);
// }

// for (let lang in langs) {
//     console.log(langs[lang]);
// }

// for (let letter in pName) {
//     console.log(letter,pName[letter]);
// }

// for of

// for (let x of person) {
//     console.log(x);         // Uncaught TypeError: person is not iterable
// }

// for of döngüsü objectlerde kullanılamıyor.

// for (let value of langs) {
//     console.log(value);
// }

// for (let letter of pName) {
//     console.log(letter);
// }