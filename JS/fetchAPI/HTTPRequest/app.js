// HTTP Requests
// http://localhost:4444/login

const api_url = " http://localhost:4444/login"
const [login, register] = document.querySelectorAll("button")
const [email, pass, email2, pass2, passConfirm] = document.querySelectorAll("input")

// Get HTTP Request

login.addEventListener("click", e =>{
    e.preventDefault()
    fetch(api_url)
    .then(res => res.json())
    .then(data => {
        console.log(data) // Go to DevTools > Network to see your data.
    })
})

// // Post HTTP Request

register.addEventListener("click", e =>{
    e.preventDefault()
    let emailExample = {
        email: email2.value,
        pass: pass2.value
    }

    console.log(emailExample)

//     fetch(api_url,{
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(emailExample)
//     })
//     .then(response =>{
//         console.log(response)
//     })
})