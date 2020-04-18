const mongoose = require('mongoose');
const {Schema} = mongoose;

const weekSchema = new Schema(
    {number: Number},
    {month: mongoose.Schema.ObjectId, ref: 'month', required: true},
    {timestamps: true},
);

const model = mongoose.model('week', weekSchema);

module.exports = model;
