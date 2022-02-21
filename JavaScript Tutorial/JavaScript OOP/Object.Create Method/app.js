// const obj = {
//     test1 : function() {
//         console.log("Test 1");
//     },
//     test2 : function() {
//         console.log("Test 2");
//     }
// }
// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Bahadır";
// emp.age = 25;
// console.log(emp);

// Bir objenin prototype ı her zaman ilk önce kendisini gösterir.

function Person() {
     
}

Person.prototype.calis = function() {
    console.log("Çalış");
}
Person.prototype.dinlen = function() {
    console.log("Dinlen");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.maasAl = function() {
    console.log("Maaş al");
}

const emp = new Employee("Bahadır",21);
console.log(emp);

emp.calis();
emp.dinlen();
emp.maasAl();



