

let div = document.createElement("div") // Creates a new element.

div.innerHTML = 'Hello new div container' // Created every div element a text that says "Hello new div container"
// div.className.add("jumbotron") // Adds a jumbotron
result = div

div.setAttribute("id", "container") // Sets any given attribute.
result = div.getAttribute("id") // Gets a named attribute.

let link = document.createElement("a") // Creates a link.
link.href = 'https://google.com'
link.innerHTML = "Click me" // When clicked, the page leads to Google.
link.setAttribute("alt", "google ref link")
link.setAttribute("target", "_blank")
result = link

console.log(result)



let li = document.createElement("li")
li.className = "list-group-item d-flex justify-content-between"
let a = document.createElement("a")
a.className = "delete-item"
let i = document.createElement("i")
i.className = "fa fa-remove"

let title = document.createTextNode("This is a new todo title.")

a.appendChild(i)
li.appendChild(a)
li.appendChild(title)

console.log(li)

// Shorter version:

let g = t => document.createElement(t)

let ul = g("ul")
let newLi = g("li")

console.log(ul)