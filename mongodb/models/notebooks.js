const mongoose = require('mongoose');
const {Schema} = mongoose;

const notebookSchema = new Schema(
    {name: {type: String, required: true}},
    { timestamps: true }
);

const model = mongoose.model('notebook', notebookSchema);

module.exports = model;
