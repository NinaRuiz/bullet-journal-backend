const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema(
    {day: Number},
    {month: Number},
    {year: Number},
    {task: String},
    {timestamps: true},
);

const model = mongoose.model('task', taskSchema);

module.exports = model;
