const title = document.querySelector("#title")
const cardColumns = document.querySelector(".card-columns").firstElementChild

let users = [{
    id: 1,
    user: "root1",
    pass: "root123"
},
{
    id: 2,
    user: "root2",
    pass: "root456"
}]

// DOMContentLoaded: Executes automaticaly data or elements in the document.

function LoadUsers(){
    console.log(users)
}

document.addEventListener("DOMContentLoaded", ()=>console.log("hello"))
document.addEventListener("DOMContentLoaded", LoadUsers)


// Focus: used for input forms or events such as hovering the mouse over some element in the document and it executes.

title.addEventListener("focus", function(e){
    console.log("hello")
    console.log(e.target)
    e.target.classList.add("bg-dark")
    e.target.classList.add("test-warning")
})

// Blur

title.addEventListener("blur", function(event){
    console.log("this is a blur event")
    event.target.classList.remove("bg-dark")
    event.target.classList.remove("text-warning")
    event.target.classList.add("bg-light")
    event.target.classList.add("text-dark")
})

// Select: executes a js code when an input element is selected in the browser such as the placeholder.

document.addEventListener("select", function(event){
    console.log("hello, this is a select event action")
    console.log(event.target.value)
    console.log(CardColumns)
    CardColumns.childNodes[3].childNodes[3].textContent=event.target.value
})

// CTRL + A = Select All

// Copy: Executes the js code when an input is copied.

title.addEventListener("copy", function(e){
    console.log("data copied!")
    alertMessage.style.display="block"
    setTimeout(function(){
        alertMessage.style.display="none"
    })
})

// Paste: Executes the js code when an input is pasted.

title.addEventListener("paste", function(e){
    console.log("Input data pasted!")
})

// CTRL + V = Paste

// Cut: Executes the js code when an input is cut.

title.addEventListener("cut", function(e){
    console.log("Cut Event!")
})

// Input: Executes the js code when the user starts to write something in the input form.

title.addEventListener("input", function(e){
    console.log("user is writing something")
    console.log(e.key)
})

/*

The code below allows you to get elements from websites with "copypaste" restriction. Enjoy! >:) 

Array.from(document.all).forEach(el=>{
el.onselectstart=null
el.oncontextmenu=null
document.oncontextmenu=null
})

The code below restricts the user to right-click the mouse to pop up a menu.

document.body.addEventListener('contextmenu',(e)=>e.preventDefault())

*/