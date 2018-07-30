let Account = require('./Account');
let mongoose = require('mongoose');

let {Schema} = mongoose;

let UserSchema = new Schema({
    name: String,
    surname: String,
    birthday: Date,
    town: String,
    phone: String,
    email: String,
    about: String,
    relationships: String,
    hobbies: String
},{
    discriminatorKey: 'kind'
});

module.exports = Account.discriminator('user',UserSchema);
