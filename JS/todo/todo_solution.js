
const TodoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const ListGroup = document.querySelector('.list-group')
const searchUser = document.querySelector("#filter")

// event listeners
firstCardBody.addEventListener('click', AddTodo)
secondCardBody.addEventListener('click',RemoveTodo)

const date = new Date()
const newDate = new Intl.DateTimeFormat("en-GB").format(date)

/*
All locales:

- en-US: MM-DD-YYYY
- en-GB: DD-MM-YYYY (mostly we use this)
- ko-KR: YYYY-MM-DD (Korean)
- ar-EG: In most Arabic speaking countries uses real Arabic digits. (2012-12-19): ١٩‏/١٢‏/٢٠١٢
- ja-JP-u-ca-japanese: They use applications that use the Japanese calendar, changing the year based on the [Reiwa era](https://en.wikipedia.org/wiki/Reiwa).
- ["ban", "id"]: This is used when a language or locale may not be supported. Use navigator.languages inside your console to see your available locales.

*/

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

//function gatherTodosFromStorage(){
    

function AddTodo(event) {
    event.preventDefault();

    var input = TodoInput.value
    
    let gatherTodosFromStorage = () => {
        let todo
        if (localStorage.setItem(newDate, TodoInput.value) === null){
           todo = []
        } else {
           todo = JSON.parse(localStorage.setItem(newDate, TodoInput.value))
        }
    console.log("Data -->", todo)
    return todo
    }

    let temp = gatherTodosFromStorage()
    
    temp.push(event)
    console.log(temp)

    //console.log('hello add todo')
    // console.log(event.target.className)
    if (event.target.className == "btn btn-danger") {
  //      console.log('add todo click click')
      //  console.log(TodoInput.value)
     //   console.log(MakeTodo('this is a new todo'));
        ListGroup.appendChild(MakeTodo(input))
        localStorage.setItem(newDate, input)
        document.querySelector("#emptyList").style.visibility = "hidden"
    }
}

function filter(){

}

//firstCardBody.addEventListener("keyup", searchUp)

//console.log(TodoInput.value, firstCardBody);


// const myFunction = (a,b)=>{

// }

// const myFunction = a =>{

// }

// const myFunction = a => console.log(a)



