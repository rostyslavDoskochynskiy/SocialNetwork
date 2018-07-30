let mongoose = require('mongoose');

let {Schema} = mongoose;

let GallerySchema = new Schema({

});

module.exports = mongoose.model('gallery', GallerySchema);