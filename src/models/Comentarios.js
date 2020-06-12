//const mongoose = require('mongoose');
//const { Schema } = mongoose;

const { Schema, model } = require('mongoose');
//Esto es lo mismo
//const { ObjectId } = Schema;
const ObjectId = Schema.ObjectId;
const CommentSchema = new Schema({
    //creo que esta linea no sirve
    //porque recive el id pero eso por el momento no me interesa
    //image_id: { type: ObjectId },

    comentaro_id: { type: ObjectId },

    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now }
});

//CommentSchema.virtual('image')
//    .set(function(image) {
//        this._image = image;
//    })
//    .get(function() {
//        return this._image;
//    });
//
module.exports = model('Comment', CommentSchema);