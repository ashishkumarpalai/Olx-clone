const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    model: String,
    image: String,
    price: String,
    no_if_comments: Number,
    user: String
})

const NoteModel = mongoose.model("note", noteSchema)

module.exports = {
    NoteModel
}