let Account = require('./Account');
let mongoose = require('mongoose');

let {Schema} = mongoose;

let GroupSchema = new Schema({
    name: String,
    desc: String,
},{
    discriminatorKey: 'kind'
});

module.exports = Account.discriminator('group', GroupSchema);