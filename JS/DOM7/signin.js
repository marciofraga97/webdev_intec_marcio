const [username, email, password, confPass] = document.querySelectorAll("input")
const SubmitBtn = document.querySelector("button")
//console.log(username, email, enterPassword, confPass, SubmitBtn)

SubmitBtn.addEventListener("click", signIn)

function signIn(event){
    event.preventDefault()
    //console.log("test")
    sessionStorage.setItem("user", username.value)
    sessionStorage.setItem("email", email.value)
    sessionStorage.setItem("pass", password.value && confPass.value)
    if(typeof (Storage) == username.value && email.value){
        
    }
}