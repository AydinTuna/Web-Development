// 1.Global Scope  2.Function Scope  3.Block Scope

var value1 = 10;                // Global scope
let value2 = 20;
const value3 = 30;

function Func() {               // Function Scope
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1, value2, value3);
}

Func();
console.log(value1, value2, value3);     // Değerleri Function scope ta tanımladığımız için Global scopeta değerler değişmedi


if(true) {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1, value2, value3);
}

console.log(value1, value2, value3);








