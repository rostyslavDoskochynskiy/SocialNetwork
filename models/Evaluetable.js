let mongoose = require('mongoose');

let {Schema} = mongoose;

let EvaluetableSchema = new Schema({

},{
    discriminatorKey: 'kind'
});

module.exports = mongoose.model('evaluetable', EvaluetableSchema);