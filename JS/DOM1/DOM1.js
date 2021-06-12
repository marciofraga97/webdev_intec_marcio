// window Object

let result

let tools = {  // clone of window
    x:function(str){
        this.alert(str)
    }
}

tools.x("intecbrussel")

window.intecbrussel =  function(str){
    alert(str)
}

result = window

result = window.outerWidth // Gives the resolution of the browser window in the HTML console.
result = window.outerHeight // Same as outerWidth but gives you the height.

window.addEventListener("resize", function(){
    console.log(window.outerWidth)
    console.log(window.outerHeight)
})

result = window.document
// or //
result = document

//result = document.write("hello")
result = document.all // Returns a HTML collection of elements, attributes and so on... in the HTML console.
result = doucment.all.length // Result in HTML: 62
result = document.head // Prints only the contents of the <head> element in HTML console.
result = document.body // Prints only the contents of the <body> element in HTML console.
result = document.location // Shows the full host information of a website (ex: hostname, hostsite, ...) in the HTML console.
result = document.script // Prints only the contents of the <script> element in HTML console.
result = document.links // Finds all of the links in the website. 
result = document.links[0].className // Finds the first link in the website given by a className (result: navbar-brand)
result = document.links[0].getAttribute("href")
result = document.links[0].classList // Shows the classList int the HTML console.

// forms

result = doucment.forms
result = document.forms.length // Result: 4
result = document.forms[1]

/*
const [searchForm, myContactForm] = document.formsù
result = searchForm
result = myContactForm
*/

result = document.forms[1].id
result = document.forms[1].method // GET or POST method

// Select elements using DOM methods

/*

getElementbyId() = Fetches the id value in the HTML. They are unique.
getElementbyClassName() = Fetches the class name in the HTML. They are NOT unique and can be used several times.
getElementbyTagName() = Fetches the tag name like <body> or <nav> ... in the HTML.
querySelector() = Fetches the css name in CSS. You can use all of the elements, attributes and tagnames only in css beggining by a (.).
querySelectorAll() = Does everything in DOM manipulation. Gives you a list a selected element, attribute or tagname in HTML.

*/

result = document.getElementById("add")
result = document.getElementById("password")

result = document.getElementsByClassName("form group")
result = document.getElementsByClassName("btn")

result = document.getElementsByTagName("input")
result = document.getElementsByTagName("p")

result = document.querySelector(".display-3")

result = document.querySelectorAll("button") // Find elemnts by tagnames
let formGroup = document.querySelectorAll(".form group") // NODELIST / ARRAY / OBJECT

/*
formGroup.forEach(el=>{
  //  console.log(el.innerHTML)
  el.innerHTML = "HELLO HELLO DOM MANIPULATION"
})
*/

let buttons = document.querySelectorAll("button")
console.log(buttons)

for(btn of buttons){
    btn.innerHTML = "test button"
}

let allText = document.querySelectorAll(".card-Title")

allText.forEach(text => text.innerHTML = "HELLO WORLD!")

allText.forEach(text=>{
    text.addEventListener("click", (e)=>{
        alert("Hello friends!")
    })
})

console.log(result)