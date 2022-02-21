let value;

const numbers = [1,2,34,5,6,6,76,8,89];
// const numbers2 = new Array(1,2,3,4,5,6,7); Alternatif yol
const langs = ["Python", "Java", "C++", "JavaScript"];
const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers[numbers.length -1]; // 89
numbers[2] = 31;
value = numbers[2];
value = numbers.indexOf(31); // 2

numbers.push(32); // sonuna ekler
value = numbers;

numbers.unshift(50);
value = numbers; // başına ekler

numbers.pop();
value = numbers; // sondan siler

numbers.shift();
value = numbers; // başından siler

numbers.splice(0,3); // 0 dan 3. indexe kadar ki değerleri siler "3 hariç" 
value = numbers;

value = numbers.sort();  // default haliyle ilk basamaktaki karakterleri sıralar.

value = numbers.sort((x,y) => x - y); // Küçükten büyüğe doğru sıralar.  (arrow function ile yazdık kodumuzus)
value = numbers.sort((x,y) => y - x);

console.log(value);