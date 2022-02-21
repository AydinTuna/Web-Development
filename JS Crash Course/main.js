// console.log("Hello World");
// console.error("This is a FUCKİNG error");
// console.warn("This is a warning");

// VARIABLES; var, *let*, *const* (Mostly used for let and const)

// DATA TYPES; String, Number, Boolean, Null, Undefined
// There is no float or decimal in JS, only 'numbers'.

// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;  null is bogus object
// const y = undefined;
// let z;

// console.log(typeof x);
// const name = "John";
// const age = 30;

// CONCATENATION
// console.log("My name is " + name + " and I am " + age)

// TEMPLATE STRING
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// Properties doesn't have parenthesis, Methots have parenthesis

// const s = "Hello World!";

// console.log(s.length);
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(" "));
// console.log(s.split(""));

// const h = "technology, computer, it, code";

// console.log(h.split(", "));

// ARRAYS - Variables that hold multiple values

// const numbers = new Array(1,2,3,4,5,6); 
// console.log(numbers);
// We created arrays with constructers. This is a uncommon way.

// const fruits = ["apples","oranges","pears", 10, true];
// console.log(fruits);
// console.log(fruits[0]);

// fruits[5] = "watermelon";
// console.log(fruits);
// That is a unefficient way

// fruits.push("mangos");
// fruits.unshift("strawberries");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hello"));
// console.log(fruits.indexOf("oranges"));

// const person = {
//     firstName: "john",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["music","movies", "sports"],
//     address: {
//         street: "50 main st.",
//         city: "Boston",
//         state: "MA" 
//     } 
// };
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// DESTRUCTING

// const { firstName, lastName} = person;
// console.log(firstName);

// const { firstName, lastName, address: {street}} = person;
// console.log(street);

// person.email = "john@gmail.com";
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         isCompleted: true    
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "Dentist appt",
//         isCompleted: false    
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);
// We use JSON format to for sending data from web to server. Convert the datas JSON format and send it.
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// FOR LOOPS

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// WHILE LOOPS

// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// A different way to printing arrays.
// for (let todo of todos) {
//     console.log(todo.id);
// }

// foreach, map, filter
// High order function methods
// todos.forEach(function(todo) {
//     console.log(todo.isCompleted);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);

// CONDITIONALS

// const x = 12;

// if (x === 10) {
//     console.log("x is 10");
// }
// else if (x > 10) {
//     console.log("x is greater than 10");
// }
// else {
//     console.log("x is less than 10");
// }

// const y = 5;
// const z = 11;

// if (y > 5 || z > 10) {
//     console.log("y is more than 5 or z is more than 10")
// }

// const a = 6;
// const b = 11;

// if (a > 5 && b > 10) {
//     console.log("a is more than 5 and b is more than 10")
// }

// TERNARY

// const x = 11;

// const color = x > 10 ? "red" : "blue";
// const color = "GREEN";
// console.log(color);

// SWITCH

// switch (color) {
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("Color is blue");
//         break;
//     default:
//         console.log("Color is not red or blue");
//         break;
// }


// FUNCTIONS

// function addNums(num1, num2) {
    // console.log(num1 + num2);
// }

// addNums();
// NaN mean is "not a number"
// addNums(5,10); 

// function addNums(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNums(4,5));

// ARROW FUNCTIONS

// const minusNums = (num1 = 9, num2 = 5) => console.log(num1 - num2);
// minusNums();

// const minusNums2 = (num1 = 9, num2 = 4) => num1 - num2; That expression mean is "return".
// console.log(minusNums2());

// const minusNums3 = num1 => num1 - 5; Or you can define a parameter to num1 with parantheses.
// console.log(minusNums3(15));

// OBJECT ORIENTED PROGRAMMING
// -- CONSTRUCTOR FUNCTION

// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// } 

// CLASS

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// Same results with constructor method but this is more easier way

// -- INSTANTIATE OBJECT (OBJEYİ SOMUTLAŞTIRMAK)

// const person1 = new Person();
// person1.firstName = "John";
// person1.lastName = "Doe";
// person1.dob = Date("1980-4-3");
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.dob);
// console.log(person1.getFullName());

// const person2 = new Person("Mary", "Smith", "1970-7-6");
// console.log(person2);
// console.log(person2.firstName);
// console.log(person2.dob);
// console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());


// DOCUMENT OBJECT MODEL

// SINGLE ELEMENT 

// const form = document.getElementById("my-form");
// console.log(form);
// console.log(document.querySelector("h1"));


// MULTIPLE ELEMENT

// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach(item => console.log(item));

// DOM MANUPILATION

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";   

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("click");
// })

// btn.addEventListener("click", e => {
//     e.preventDefault();
//     console.log(e.target.className);
// })

// btn.addEventListener("click", e => {
//     e.preventDefault();
//     document.querySelector("#my-form").style.background = "#ccc"; 
//     document.querySelector("body").classList.add("bg-dark");
//     document.querySelector(".items").lastElementChild.innerHTML = "<h1 style = 'color: black;'>Hello</h1>";
// })

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === "" || emailInput.value === "") {
//         msg.classList.add("error");
//         msg.innerHTML = "Please enter all fields";

//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         userList.appendChild(li);

//         nameInput.value = "";
//         emailInput.value = "";

//     }
// }