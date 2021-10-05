const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("blog", {title: "this is a blog"})
})

const authToken = (req, res, next) => {
    console.log("hello, this is from middleware")
    let authDecoded = req.headers.authorization.substr(6)
    console.log(req.headers.authorization.substr(6))
    next()
}

// /blog/api
router.get("/api", authToken, (req, res) => {
    res.json({
        id: 1 
    })
})

module.exports = router