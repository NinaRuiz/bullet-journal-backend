const mongoose = require('mongoose');
const {Schema} = mongoose;

const yearsSchema = new Schema(
    {year: {type: String, required: true}},
    {notebook: {type: mongoose.Schema.Types.ObjectId, ref: 'notebook'}},
    { timestamps: true }
);

const model = mongoose.model('year', yearsSchema);

module.exports = model;
