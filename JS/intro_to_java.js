// See intro_to_java.html

// HTML Content = getElementById()

document.getElementById("demo") = "This is Marcio. Thanks for clicking!" // The .innerHTML element will appear in the HTML changing the content.

// HTML Attribute Values (getElementById().x)

document.getElementById("myImage").src="blue.png" // The id=myImage gets the img src of the HTML being (blue.png). You add "classes" as dots (.x)
document.getElementById("myImage").src="red.png" // The id=myImage gets the img src of the HTML being (red.png).

// HTML Styles (.style.x)

document.getElementById("demo2").style.fontSize="40px" // You can directly change the style here in JS, in this case, to change the font size.

// Hide HTML content (.style.display="none")

document.getElementById("demo3").style.display="none" // Or hide the text with the .style.display attribute setting as "none".

// Show HTML content (.style.display="block" or "run-in")

document.getElementById("demo4").style.display="block" // Or show the text with the .style.display attribute setting as ="block" or "run-in".

// There are also other .display properties in this link: https://www.w3schools.com/jsref/prop_style_display.asp