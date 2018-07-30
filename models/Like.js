let mongoose = require('mongoose');

let {Schema} = mongoose;

let LikeSchema = new Schema({
    date: Date,
    value: String
});

module.exports = mongoose.model('like', LikeSchema);