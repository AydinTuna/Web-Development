function square(x) {
    return (x * x);
    console.log("merhaba");
}

// Aynı zamanda return fonksiyonu sonlandıran bir ifadedir. Returnun altına yazılan hiçbir kod çalışmaz

function cube(y) {
    return (y * y * y);
}
let value = cube(square(5));

console.log(value);   // Fonksiyonumuzu return etmediğimiz için bir değer dönmediğinden dolayı NaN sonucunu aldık


// Function Expression

const merhaba = function(name) {
    console.log("Merhaba " + name);
}
merhaba("Bahadır");


// Immediately Invoked Function Expression  (IIFE)
// Tanımlandığı yerde çalışır.

(function(name) {
    console.log("Merhaba " + name);
})("Bahadır");