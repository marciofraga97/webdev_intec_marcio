const express = require("express") // Core module: import express package

// Making a restAPI in JS format from local JSON data:

const app = express()

// Creating a custom localhost port:
const PORT = 8500


const fs = require("fs")


app.use(express.json())

// GET Request:

// app is the same as express() but easier
// get() --> site, handler(callback function)

// root endpoint
app.get("/", function(req, res) {
    res.send("homepage")
})

app.get("/users", function(req, res) {
    // Read file
    fs.readFile(`${__dirname}/data.json`, "utf-8", (err,data) => {
        // Readable stream
        res.send(JSON.parse(data))
    })
})

app.post("/users", (req, res) => {
    console.log(req, body)

    // 1. Read file here
    fs.readFile(`${__dirname}/data.json`, "utf-8", (err,data) => {

        // 2. Convert data into JSON
        let currentData = JSON.parse(data)

        // 3. Insert new object into currentData
        currentData.push(req.body)

        // 4. Rewrite file again with updated object data [currentData] ---> Convert it back to string before writefile
        fs.writeFile(`${__dirname}/data.json`,JSON.stringify(currentData), (err) => {
            if(err) {
                console.log(err)
            }
            console.log("Data is UPDATED!")
        })

        // 5. Response to client and finish it
        res.json({
            msg: "OK",
            newUser: req.body
        })
    })
})

app.listen(PORT,() => {
    console.log(`Server is running...  http://localhost:${PORT}/`)
})


// Or, you can require the json data locally.

// Require json file:

let json = require("./data.json")