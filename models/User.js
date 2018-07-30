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
    hobbies: String,
    userReaching: [{
        type: Schema.Types.ObjectId,
        ref: 'evaluetable'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'message'
    }],
    chats: [{
        type: Schema.Types.ObjectId,
        ref: 'chat'
    }],
    subscriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'account'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'account'
    }]
},{
    discriminatorKey: 'kind'
});

module.exports = Account.discriminator('user',UserSchema);
