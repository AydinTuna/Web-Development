// Statik Metodlar

// class Matematik {
//     cube(x) {
//         console.log(x*x*x);
//     }
// }

// const math = new Matematik();

// math.cube(3);   // 27

// cube() çağırmak için object yaratmak gerekli. Static metodlarda object yaratmadan da kullanılabilir.


class Matematik {
    sqrt(x) {
        console.log(x*x);
    }

    static cube(x) {
        console.log(x*x*x);
    }
}
const mat = new Matematik();
// mat.cube(3);    // Uncaught TypeError: mat.cube is not a function
console.log(mat);
mat.sqrt(3);

Matematik.cube(3);  // 27
Matematik.sqrt(3);  // Uncaught TypeError: Matematik.sqrt is not a function



// Statik metotlara sınıflar üzerinden erişilebilirken normal metotlara object oluşturarak erişilebilir.


