// Events (go to a HTML page: <script src = app.js</script>)
const user = document.getElementById("user")
const pass = document.getElementById("pass")
console.log(user,pass)

let i
function clickEventFunction(name){
    i++
    alert(`"Hello" ${name}`)
    let user = {
        id:i,
        user:user.value,
        pass:pass.value
    }
}