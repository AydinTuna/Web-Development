// JavaScript Prototype tabanlı bir dildir.
// Her Objectin mutlaka prototype özelliği bulunur

// const object = new Object();  // Object Literal
// const object2 = new Object();  // Object Literal
// object.name = "Bahadır";
// console.log(object);

function Employee(name,age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler gösteriliyor");
    }
    this.toString = function() {
        console.log("Bu bir Employee objesidir");
    }
}
const emp1 = new Employee("Bahadır",21);
console.log(emp1);

console.log(emp1.toString());

// JavaScript'te her object en üst katmandaki default objecte bağlıdır. Bu prototypler sayesinde gerçekleşir ve bu sayede default objectin sahip olduğu 
// "toString()" metoduna erişilebilir yani kalıtım sağlanmış olur.  Bu yapıya "prototype chain" denir.
