// Prototype Inheritance
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age);
// }

// function Employee(name,age,salary) { 
//     Person.call(this,name,age);
//     this.salary = salary;
// } 
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = () => {
//     console.log("Employee");
// }
// Employee.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);      // Function Override 
// }

// const emp = new Employee("Bahadır",21,5400000);


// Es6 Inheritance

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age);        
    }
}
class Employee extends Person {         // Extends C# 'daki => Employee : Person ifadesine karşılık gelir
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);    // SuperClass ın constructor unu kullanmasını söyler.
        this.salary = salary;
    }
    showInfos() {
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);      // Function Override 
    }
    toString() {
        console.log("Employee");
    }
    raiseSalary(amount) {
        this.salary += amount;
    }
}
const emp = new Employee("Bahadır",21,15000);
emp.raiseSalary(1000);

// console.log(emp);
emp.showInfos();
emp.toString();
