// Maps --> Key(Herhangi bir veri tipinde olabilir objectin aksine)  | Value

// let myMap = new Map();  // Map oluşturma

// const key1 = "Bahadır";
// const key2 = {a : 10, b : 20};
// const key3 = () => 2;

// Set

// myMap.set(key1,"String değer");
// myMap.set(key2,"Object literal değer");
// myMap.set(key3,"Function değer");

// Get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));
// console.log(myMap);

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// cities.forEach(function(value,key) {
//     console.log(key,value);
// });

// for (let key of cities) {
//     console.log(key);
// }

// for (let [key,value] of cities) {  // Destructing
//     console.log(key, value);
// }


// Map Keys

// for (let key of cities.keys()) {
//     console.log(key);
// }

// for (let value of cities.values()) {
//     console.log(value);
// }

// Mapler ile Arrayler arasında kuvvetli bir bağ vardır.

// Arraylerden Map oluşturulabilir.

// const arr = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(arr);

// console.log(lastMap);

// Arraylerden Map oluşturma

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// const array = Array.from(cities);
// [["Ankara",5]["İstanbul",15]["İzmir",4]]
// console.log(array);

// array.forEach(function(arr) {
//     console.log(arr);
// });

