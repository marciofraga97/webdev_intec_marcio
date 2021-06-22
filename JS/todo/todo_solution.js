
const TodoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const ListGroup = document.querySelector('.list-group')
const searchUser = document.querySelector("#filter")

// event listeners
firstCardBody.addEventListener('click', AddTodo)
secondCardBody.addEventListener('click',RemoveTodo)

function deleteItem(){

    document.querySelector('.list-group-item').remove();

}

function RemoveTodo(event){
    event.preventDefault();
    if(event.target.id == "clear-todos"){
        conf()
        console.log('this is all clear todos button')
        document.location.reload()
    }

    if(event.target.className=="fa fa-remove"){
        console.log(event.target.parentElement.parentElement) // remove()
        event.target.parentElement.parentElement.remove();
        if(document.querySelector('.list-group').childElementCount == 1){
            document.location.reload()
        }
    }
}

function conf(){
    if(confirm("Are you sue you want to delete all your todos?") == false){
        RemoveTodo.preventDefault()
    }
}

let datepicker = new tui.DatePicker('#wrapper',{
    date: new Date(),
    input:{
    element:'#datepicker-input',
    format:'yyyy-MM-dd'
    }
    })


const generator = t => document.createElement(t)

const MakeTodo = (title) => {
    let li = generator('li')
    li.className = "list-group-item d-flex justify-content-between"
    let todoTitle = document.createTextNode(title)
    li.appendChild(todoTitle)

    let a = generator('a')
    a.href="#"
    a.className = "delete-item"

    let i = generator('i')
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)

    return li

}

function AddTodo(event) {
    var input = TodoInput.value
    event.preventDefault();
    //console.log('hello add todo')
    // console.log(event.target.className)
    if (event.target.className == "btn btn-danger") {
  //      console.log('add todo click click')
      //  console.log(TodoInput.value)
     //   console.log(MakeTodo('this is a new todo'));
        ListGroup.appendChild(MakeTodo(input))
        document.querySelector("#emptyList").style.visibility = "hidden"
    }
}

function filter(){

}

firstCardBody.addEventListener("keyup", searchUp)

//console.log(TodoInput.value, firstCardBody);


// const myFunction = (a,b)=>{

// }

// const myFunction = a =>{

// }

// const myFunction = a => console.log(a)