const todoInput = document.querySelector("#todo");
const filterInput = document.querySelector("#filter");
const form = document.querySelector("#todo-form");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");
const todoFilter = document.querySelector(".filter");
let newTodo;

eventListeners();

function eventListeners() {
    todoInput.addEventListener("keyup", inpNewTodo);
    filterInput.addEventListener("keyup", filterTodo);
    form.addEventListener("submit", addTodo);
    window.addEventListener("DOMContentLoaded", loadLocalStorageToUI);
    secondCardBody.addEventListener("click", deleteItem);

}

function loadLocalStorageToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("Todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("Todos"));
    }
    return todos;
}

function addToLocalStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("Todos", JSON.stringify(todos));
}


function inpNewTodo(e) {
    newTodo = e.target.value.trim();
}

function addTodo(e) {
    if (todoInput.value == null || todoInput.value === "") {
        showAlert("danger", "Lütfen bu alanı boş bırakmayınız!", "todo");
    } else {
        addTodoToUI(newTodo);
        addToLocalStorage(newTodo);
        showAlert("success", "Todo başarılı bir şekilde eklendi", "todo");
    }

    todoInput.value = "";
    todoInput.focus();


    e.preventDefault();
}

function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(newTodo);

    listItem.className = "list-group-item d-flex justify-content-between my-2";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.appendChild(text);
    listItem.appendChild(link);
    todoList.appendChild(listItem);
}

function showAlert(type, message, where) {
    if (where === "todo") {
        document.getElementById("alertTodo").className = `alert alert-${type}`;
        document.getElementById("alertTodo").textContent = message;
        setTimeout(function () {
            document.getElementById("alertTodo").className = "";
            document.getElementById("alertTodo").textContent = "";
        }, 3000);

    } else if (where === "filter") {
        document.getElementById("alertFilter").className = `alert alert-${type}`;
        document.getElementById("alertFilter").textContent = message;
        setTimeout(function () {
            document.getElementById("alertFilter").className = "";
            document.getElementById("alertFilter").textContent = "";
        }, 3000);
    }
}

function deleteItem(e) {
    let targetItem = e.target.parentElement.parentElement.textContent;
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteLocalStorage(targetItem);
        showAlert("success", "Todo başarı ile silindi", "filter");
    }
    else if (e.target.className === "btn btn-dark") {
        while (todoList.firstElementChild != null) {
            todoList.firstElementChild.remove();
            deleteAllLocalStorage();
        }
    }
}

function deleteLocalStorage(targetItem) {
    todos = getTodosFromStorage();
    targetItemIndex = todos.indexOf(targetItem);
    todos.splice(targetItemIndex,1);
    localStorage.setItem("Todos",JSON.stringify(todos));
}

function deleteAllLocalStorage() {
    localStorage.removeItem("Todos");
}

function filterTodo(e) {
    let filterLow = e.target.value.toLowerCase();
    listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem) {
        text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterLow) === -1) {
            listItem.setAttribute("style", "display: none !important;");
        } else if (text.indexOf(filterLow) !== -1) {
            listItem.setAttribute("style", "display: block;");

        }    
    });
}

