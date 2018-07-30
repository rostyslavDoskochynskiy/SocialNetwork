let mongoose = require('mongoose');

let {Schema} = mongoose;

let ChatSchema = new Schema({
    name: String
});

module.exports = mongoose.model('chat', ChatSchema);
