// Her ne kadar ismine Class dense de aslında arka planda prototype lar kullanılmaya devam ediyor.
// Bu duruma "Syntactic Sugar" denir. Daha anlaşılabilir kıldığı için.

// Old Way

// function Employee(name,age,salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function() {
//     console.log(`İsim: ${this.name}, Yaş: ${this.age}, Maaş: ${this.salary}`);
// }
// const emp = new Employee("Bahadır",21,150000);
// console.log(emp);
// emp.showInfos();


// With Es6+

class Employee {
    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos() {
        console.log(`İsim: ${this.name}, Yaş: ${this.age}, Maaş: ${this.salary}`);
    }
}
const emp = new Employee("Bahadır",21,150000);
console.log(emp);
emp.showInfos();
