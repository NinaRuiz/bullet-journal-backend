const mongoose = require('mongoose');
const {Schema} = mongoose;

const daySchema = new Schema(
    {day: Number},
    {month: Number},
    {year: Number},
    {week: mongoose.Schema.ObjectId, ref: 'week', required: true},
    {timestamps: true},
);

const model = mongoose.model('day', daySchema);

module.exports = model;
