let mongoose = require('mongoose');

let {Schema} = mongoose;

let MessageSchema = new Schema({
    text: String,
    date: Date
});

module.exports = mongoose.model('message', MessageSchema);