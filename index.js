const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const notebookRoutes = require('./routes/v1/notebooks-routes');
const yearRoutes = require('./routes/v1/years-routes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/v1/notebook', notebookRoutes);
app.use('/api/v1/year', yearRoutes);

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log('conected to mongdb'),
    app.listen(PORT, () =>{
    console.log('running on '+ PORT)
    }),
).catch(error =>{
    console.log('mongodb error', error)
    });


