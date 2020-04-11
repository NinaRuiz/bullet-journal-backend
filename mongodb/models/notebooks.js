const mongoose = require('mongoose');
const {Schema} = mongoose;

const notebookSchema = new Schema({
    name: {type: String, required: true},
    timestamps: { date: 'created_at' }
});

const model = mongoose.model('notebook', notebookSchema);

module.exports = model;
