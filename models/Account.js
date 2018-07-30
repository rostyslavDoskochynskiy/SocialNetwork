let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AccountSchema = new Schema({
    avatar: String,
    dateOfRegistration: Date,
    login: String,
    password: String,
},{
    discriminatorKey: 'kind'
});

module.exports = mongoose.model('account', AccountSchema);