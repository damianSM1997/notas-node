const { Mongoose } = require("mongoose");

// los dos sirven para modelar el dato
const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});


module.exports = model('Note', NoteSchema);