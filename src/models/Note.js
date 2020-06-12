const { Mongoose } = require("mongoose");

// los dos sirven para modelar el dato
const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true,
    },
}, {
    timestamps: true
});


module.exports = model('Note', NoteSchema);