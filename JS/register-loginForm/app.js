// Import
import {} from ""

// Selectors

let loginMail = document.querySelector("input#loginMail") // Login mail
let loginPass = document.querySelector("input#loginPass") // Login password
let loginBtn = document.querySelector("button.btn.btn-primary") // Login button

let regMail = document.querySelector("input#regMail") // Register mail
let regPass = document.querySelector("input#regPass") // Register password
let regBtn = document.querySelector("button.btn.btn-success") // Register button

// DOM Manipulation

function regData() {
    return [{"mail": `${regMail.value}`, "password": `${regPass.value}`}]
}

regBtn.addEventListener("click", (e) => {
    
})