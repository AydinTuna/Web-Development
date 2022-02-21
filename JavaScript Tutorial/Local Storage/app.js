// Local Storage

// localStorage.setItem("Hareket", "burpee");
// localStorage.setItem("Tekrar", "50");

// let value = localStorage.getItem("Tekrar");
// console.log(value);             // 50
// console.log(typeof value);      // string

// localStorage.clear();

// console.log(localStorage.getItem("Sport"));         // null


// Local Storage Array Yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("to do", todos);
// console.log(localStorage.getItem("to do")); // Todo 1,Todo 2,Todo 3

// localStorage.setItem("to do", JSON.stringify(todos));
// console.log(localStorage.getItem("to do"));    // ["Todo 1","Todo 2","Todo 3"]

// const Human = {
//     name : "Bahadır",
//     age : 21,
//     skills : {
//         digitalDesign : "Adobe Photoshop",
//         langs : "Html, Css, JavaScript, Solidity"  
//     },
//     address : "İzmir"
// }

// localStorage.setItem("Human Spec.", JSON.stringify(Human));
// console.log(localStorage.getItem("Human Spec.")); 

// const value = JSON.parse(localStorage.getItem("Human Spec."));
// console.log(value);

// *************************************************************************************************************
 
const form = document.querySelector("#todo-form");
const inpTodo = document.querySelector("#todo");

form.addEventListener("submit", function(e) {
    const value = inpTodo.value;

    let todos;
    
    if(localStorage.getItem("Todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("Todos"));
    }
    todos.push(value);

    localStorage.setItem("Todos", JSON.stringify(todos));

    e.preventDefault();
});




