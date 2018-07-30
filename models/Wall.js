let mongoose = require('mongoose');

let {Schema} = mongoose;

let WallSchema = new Schema({

});

module.exports = mongoose.model('wall', WallSchema);