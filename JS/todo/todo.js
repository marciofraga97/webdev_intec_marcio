const todoInput = document.querySelector("#todo")
const firstCardbody = document.querySelectorAll(".card-body")

firstCardbody.addEventListener("click",addTodo)

const generator = t => document.createElement(t)

/*
const makeTodo = (title) => {
    let li = generator("li")
    li.className =
    let todoTitle = document.createTextNode(title)
    li.appendChild(todoTitle)
    let a = generator ("a")
    a.className =
    let i = generator("i")
    i.className =
} 
*/

function addTodo(event){
    event.preventDefault()
    //console.log("hello add todo")
    //console.log(event.target.className)
    if (event.className == "btn btn-danger"){
        console.log("add todo click click")
        console.log(todoInput.value)
    }
}

console.log(todoInput.nodeValue,firstCardbody)

var todoList = document.querySelectorAll("li")

function removeItem(){
    todoList[0].remove()
}

function removeAll(){
    if(confirm("Are you sure you want to delete the list?") == true){
        todoList[0].remove()
        todoList[1].remove()
        todoList[2].remove()
        todoList[3].remove()
        todoList[4].remove()
        todoList[5].remove()
        todoList[6].remove()
        todoList[7].remove()
    } else {}
}