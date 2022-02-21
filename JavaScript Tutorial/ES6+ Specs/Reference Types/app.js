// Referans veri tipleri, bellekte yer tutar
// Primitiv veri tipleri ise sadece değer taşır.
// Referans veri tiplerinde kıyaslama yaparken bellekteki tuttuğu yerler aynı mı değil mi ona bakılır

// let a = "Bahadır";
// let b = "Bahadır";

// if (a === b) {                       // Primitiv
//     console.log("Eşit");
// }

// const arr1 = [1,2,3,4,5,6];
// const arr2 = [1,2,3,4,5,6];

// if (arr1 === arr2) {                 // Referans
//     console.log("Eşit");
// }

// const person1 = {
//     name : "Bahadır",
//     age : 21
// }
// const person2 = {
//     name : "Bahadır",
//     age : 21
// }

// if (person1 === person2) {           // Referans
//     console.log("Eşit");
// }


// const cities = new Map();
// const key = [1,2,3];
// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set(key,"Array");

// console.log(cities.get("Ankara"));   // 5    
// console.log(cities.get([1,2,3]));    // undefined        ** Array referans tipli bir veri olduğu için bellekteki boş bir adresten çağırıldı **
// console.log(cities.get(key));        // Array            ** Bellekte bir yer tutulduğu için ve tutulan yer çağrıldığı için sonuç aldık **





