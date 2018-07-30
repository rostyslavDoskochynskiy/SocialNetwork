let mongoose = require('mongoose');

let {Schema} = mongoose;

let WallSchema = new Schema({
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },
    // reposts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'post'
    // }]
});

module.exports = mongoose.model('wall', WallSchema);