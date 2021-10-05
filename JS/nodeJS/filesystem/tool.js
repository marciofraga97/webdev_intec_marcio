const fetch = require("node-fetch")
const fs = require("fs")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
    let result = JSON.stringify(data)
    console.log(result) // Output: shows the JSON data in the console.
    fs.writeFile("users.json", result, function(err){
        if(err){
            console.log(err)
        } else {
            console.log(data)
        }
    })
})