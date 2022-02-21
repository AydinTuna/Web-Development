// Setler - Kümeler     ** Bir değeri sadece bir kez taşırlar **

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Bahadır");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

// console.log(mySet);    // 100 bir defa yazdırıldı

const mySet2 = new Set([100,100,3.14,"Bahadır",true,[1,2,3],{a:1,b:2}]);

// console.log(mySet2);

// ikisi de aynı sonucu verdi


// Size 
// console.log(mySet.size);

// Delete
// mySet.delete(true);
// console.log(mySet);

// Has
// console.log(mySet.has(true));
// console.log(mySet.has(100)); 
// console.log(mySet.has([1,2,3]));    // false    ** Çünkü referans veri tipi olduğu için adres değerinin sorgulanan veriyle aynı olması gerekir. ** 

// mySet.forEach(function(value) {
//     console.log(value);
// });

// for (let value of mySet) {
//     console.log(value);
// }


// Setlerden Array oluşturma
const array = Array.from(mySet);
console.log(array);