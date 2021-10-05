const http = require("http") // Core module
const fetch = require("node fetch") // Not core module

let users = [
    {
        id:1,
        username: "Admin"
    },
    {
        id:2,
        username: "User"
    }

]

http.createServer((req, res)=>{
    res.end("hello world")
    console.log(res.url)
    if(req.url === "/admin"){
        res.write(`Welcome to the dashboard, ${users[0].username}\n`)
    }
    else if(req.url === "/user"){
        res.write(`Welcome to the dashboard, ${users[1].username}!\n`)
    }
    res.end("Homepage")
}).listen(7890, () =>{
    console.log("Server is running without problems! ;)")
})