const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const user = require("./model/user")
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
    res.send("Welcome to restAPI!")
})

const ifUserHasToken = (req, res, next) => {
    // Middleware check token
    try {
        // console.log(req.headers)
        const token = req.headers.authorization.split("")
        // console.log(token)
        jwt.verify(token, "put your secret token key here")
        next()
    } catch (error) {
        res.status(401).json({
            msg: "Invalid or expired token. :("
        })
    }
}

router.get("/users", ifUserHasToken, (req, res) => {
    user.find({})
    .then(res => {
        res.json(res)
    })
})

router.post("/auth/register", (req, res) => {
    console.log(req.body)
    //http://localhost/api/auth/register
    bcrypt.hash(req.body.password, 10) // encrypted password
    .then(hashed => {
        console.log(hashed)
        const newUser = new user({
            username: req.body.username,
            password: hashed
        })

        newUser.save()
        .then(res => {
            res.json({
                msg: "SAVED",
                answer: ""
            })
        })
        // res.json({
        //     username: req.body.username,
        //     plainTextPassword: req.body.password,
        //     password: hashed
        // })
    })
})

router.post("/auth/login", (req, res) => {
    let currentUser

    user.findOne({
        username: req.body.username
    })
    .then(user => {
        if(!user){
            return res.status(401).json({message: "AUTH FAIL"})
        }
        currentUser = user
        return bcrypt.compare(req.body.password, user.password)
    }).then(res => {
        if(!response){
            return res.status(401).json({message: "AUTH FAIL"})
        }
        if(currentUser !==null && currentUser !==undefined){
            // User exists and password is correct!
            let token = jwt.sign({
                username: currentUser.username,
                userId: currentUser.id
            },{ //Token secret key here
                expiresIn: "1h"
            })
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                _id: currentUser._id
            })
            // end of scope ---> user exists and password is correct.
        }
    })
})

module.exports = router