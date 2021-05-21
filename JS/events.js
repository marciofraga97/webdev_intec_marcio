// See intro_to_java.html

// EVENTS

// An event can be something the browser does, or something a user does inside of an HTML page.

// Examples: we will be using Date() = it's a indentifier that tells the time of your device. 

// onclick Attribute

document.getElementById("demo6") = Date() // This event will be displayed if the onclick attribute is active in HTML. It use commonly used for buttons.

// Attribute with functions

function displayDate() {
    document.getElementById("demo6").innerHTML = Date()
}

// onmouseover and onmouseout Attributes (needs work)

document.getElementById("demo7").fontColor("red")
document.getElementById("demo7").fontColor("black")

//onkeydown Attribute

document.getElementById("demo8").style.backgroundColor("cyan")