// Core Modules in NodeJS

// const moduleName1 = require("http") // Load core modules.
const moduleName2 = require("fs")

const http = require("http") // Loaded http core module.
const url = require("url") // Loaded url core module.

http.createServer((request,response) =>{
    response.end("Hello nodejs")
    console.log(request.url)
    url.parse(`http://localhost:5000${request.url}`)
    // console.log(result)
    console.log(result.query)
}).listen(5000,() => {
    console.log("Server is running! :)")
})

// Type the correct localhost as "localhostXXXX" in the browser.