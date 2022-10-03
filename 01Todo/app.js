// DOM SELECTION
let todoInput =  document.querySelector('.todoInput');
let todoButton =  document.querySelector('.todoButton');
let todoList =  document.querySelector('.todo-list');

// EVENTLISTENERS
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
document.addEventListener('DOMContentLoaded', fetchTodo)


// FUNCTION
function addTodo(e){
    e.preventDefault();
    // create a div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv')
    // store in localStorage
    saveLocal(todoInput.value);
    // create a li
    const newTodo = document.createElement('li');
    newTodo.classList.add('newTodo')
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todoInput.value;
    todoInput.value='';

    // create a check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    todoDiv.appendChild(checkButton);

     // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton')
        deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
    // console.log(todoDiv);
    todoList.appendChild(todoDiv);

}   

function deleteTodo(e){
    const selectedItem = e.target;
    console.log(selectedItem)
    if(selectedItem.classList[0]=='checkButton'){
         let todo = selectedItem.parentElement;
        //  console.log(todo)
         todo.classList.add('checkAnimation')    }
     if(selectedItem.classList[0]=='deleteButton'){
         let todo = selectedItem.parentElement;
        //  console.log(todo)
         todo.classList.add('deletedAnimation')
    }
}

function saveLocal(todo){
    // console.log(todo)

    let todos;
    if(localStorage.getItem('todos')=== null){
        todos= [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    let convertIntoString = JSON.stringify(todos)
    localStorage.setItem('todos', convertIntoString )
}

function fetchTodo(){
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos= [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo)=>{
    // console.log("Hello >", todo)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv')
    // create a li
    const newTodo = document.createElement('li');
    newTodo.classList.add('newTodo')
    todoDiv.appendChild(newTodo);
    newTodo.innerText = todo;

    // create a check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('checkButton');
    checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-square-check"></i>';
    todoDiv.appendChild(checkButton);

     // create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton')
    deleteButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
    // console.log(todoDiv);
    todoList.appendChild(todoDiv);
    });
}