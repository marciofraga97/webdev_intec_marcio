const [username, password] = document.querySelectorAll('input')
const SubmitBtn = document.querySelector('button')
console.log(username, password)


SubmitBtn.addEventListener('click', CheckAuth)

function CheckAuth(event) {

    event.preventDefault();
    console.log('testing')
    if (typeof (Storage) !== 'undefined') { // if WebStorageAPI is available in your browser
        if (sessionStorage.user == username.value && sessionStorage.pass == password.value) {
            // success 
            // generate cookie session here

            let cookieExpire = new Date(2021, 12, 1)
            document.cookie = `name=${username.value}; expires=${cookieExpire.toUTCString()}`
            
            location.href = 'dashboard.html'
        } else {
            // fail
            alert('Username or password is incorrect. Please try again!')
        }
    }
}