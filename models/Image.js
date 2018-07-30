let mongoose = require('mongoose');
let Evaluetable = require('Evaluetable');
let {Schema} = mongoose;

let ImageSchema = new Schema({
    path: String,
    title: String
},{
    discriminatorKey: 'kind'
});

module.exports = Evaluetable.discriminator('image', ImageSchema);