let mongoose = require('mongoose');

let {Schema} = mongoose;

let CommentSchema = new Schema({
    text: String,
    date: Date,
});

module.exports = mongoose.model('comment', CommentSchema);