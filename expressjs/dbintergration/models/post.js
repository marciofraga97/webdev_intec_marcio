const mongoose = require("mongoose")
var Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
})

module.exports = mongoose.model("Posts", postSchema)