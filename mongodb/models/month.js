const mongoose = require('mongoose');
const {Schema} = mongoose;

const monthSchema = new Schema(
    {month: String},
    {days: Number},
    {startDay: String},
    {year: mongoose.Schema.ObjectId, ref: 'year', required: true},
    {timestamps: true},
);

const model = mongoose.model('month', monthSchema);

module.exports = model;
