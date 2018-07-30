let mongoose = require('mongoose');
let Evaluetable = require('Evaluetable');

let {Schema} = mongoose;

let PostSchema = new Schema({
    dateOfPost: Date,
    text: String
},{
    discriminatorKey: 'kind'
});

module.exports = Evaluetable.discriminator('post', PostSchema);