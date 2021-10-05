// Filesystem core module
const express = require("express") // Core module: import express package
const fs = require("fs")

// Allow client ask request forom app?
// const cors = require("cors")

// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // For legacy browser support
// }
// app.use(cors(corsOptions));


// RestAPI in JSON format locally
const app = express()

// Localhost port
const PORT = 3000

// GET Request
app.get("/", function (req, res) {
    // fs.readFile(`${__dirname}/index.html`, "utf-8", (err,data) => {
    //     res.send(data)
    // })
    fs.readFile(`${__dirname}/data.json`, "utf-8", (err,data) => {
        res.send(data)
    })
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data))
})

// app.post("/", function(req, res) {
//     fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) => {
//         let currentData = JSON.parse(data)
//         currentData.push(data)
//         fs.writeFile(`${__dirname}/data.json`,JSON.stringify(currentData), (err) => {
//             if(err) {
//                 console.log(err)
//             }
//             console.log("Data is UPDATED!")
//         })
//         res.json(data)
//     })
// })

// Server running
app.listen(PORT,() => {
    console.log(`Server is running...  http://localhost:${PORT}/`)
})