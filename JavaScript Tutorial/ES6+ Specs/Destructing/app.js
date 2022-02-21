// Destructing

// let number1, number2;

// arr = [100,200,300,400];

// [number1,number2] = arr;
// const [number1,number2] = arr;

// console.log(number1,number2);


// Object Destructing

// const number = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// }

// const {a, b, c} = number;
// const {a:number1, b:number2, c:number3} = number;
// console.log(number1,number2,number3);


// Function Destructing

// const getLangs = () => ["Html","Css","JavaScript"];

// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3);

const person = {
    name : "Bahadır",
    year : 2000,
    salary : 150000,
    showInfos : () => console.log("Bilgiler gösteriliyor...")
}

const {name:isim, year: yil, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);
bilgileriGoster();
