// Kalıtım - Inheritance
function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}
const person1 = new Person("Tuna",21);
person1.showInfos();

function Employee(name,age,salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
} 
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = () => {
    console.log("Employee");
}
// Employee.prototype.showInfos = function() {
//     console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);      // Function Override 
// }

function showInfos() {
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);  // Function Override with call function
}


const emp = new Employee("Bahadır",21,5400000);

showInfos.call(emp);
emp.toString();