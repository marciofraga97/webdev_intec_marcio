var express = require('express');
var router = express.Router();
const postSchema = require("../models/post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// get POSTS
router.get("/API", (res, req) => {
  postSchema.find({}, (err, data) => {
    console.log(data)
    res.json({
      posts:data
    })
  })
})

// add POSTS
router.post("/API", (req, res) => {
  let post = new postSchema(req.body)
  console.log(req.body)
  post.save()
  .then(result => {
    res.json({
      msg: "Ok, it's saved!",
      data: req.body
    })
  })
})

module.exports = router;
