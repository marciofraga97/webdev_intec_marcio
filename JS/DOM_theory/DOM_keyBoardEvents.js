// Tip: Disable the comment lines if you want to activate the lines.

const title = document.querySelector("#title")

let name = ""

// keypress: Character and numbers only! Executes a js code when the key is pressed down after you released it.

function keyPressEventCallBack(event){
    console.log(event.key)
    name += event.key
    console.log(name)
}

//title.addEventListener("keypress", keyPressEventCallBack)

// keydown: All key presses! Executes the js code when a key is pressed down even if you released it.

title.addEventListener("keydown", keyPressEventCallBack)

// keyUp: Executes the js code when a key is pressed after release.

title.addEventListener("keyup", keyPressEventCallBack)