const TodoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const ListGroup = document.querySelector('.list-group')

// event listeners
firstCardBody.addEventListener('click', AddTodo)
secondCardBody.addEventListener('click',RemoveTodo)



function deleteItem(){

    document.querySelector('.list-group-item').remove();

}


function RemoveTodo(event){
    event.preventDefault();
    if(event.target.id == "clear-todos"){
        console.log('this is all clear todos button')
        ListGroup.innerHTML=""
    }

    if(event.target.className=="fa fa-remove"){
        console.log(event.target.parentElement.parentElement) // remove()
        event.target.parentElement.parentElement.remove();
    }
}


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
    event.preventDefault();
    //console.log('hello add todo')
    // console.log(event.target.className)
    if (event.target.className == "btn btn-danger") {
  //      console.log('add todo click click')
      //  console.log(TodoInput.value)
     //   console.log(MakeTodo('this is a new todo'));
        ListGroup.appendChild(MakeTodo(TodoInput.value))
    }
}

//console.log(TodoInput.value, firstCardBody);


// const myFunction = (a,b)=>{

// }

// const myFunction = a =>{

// }

// const myFunction = a => console.log(a)