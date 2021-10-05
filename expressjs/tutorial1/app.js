const express = require("express") // Import express packages
const app = express()
const {home,students} = require("./controller/routers")
const PORT = 9300



// root endpoint

app.get("/", home){
})

app.get("/", students)

app.get("/teacher", teacher)

app.get("*", function(req, res){
    res.send("this is test again")
})

app.listen(PORT, () => {
    console.log(`Server is running.... http://localhost${PORT}/`)
})