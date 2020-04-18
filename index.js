const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const notebookRoutes = require('./routes/v1/notebooks-routes');
const yearRoutes = require('./routes/v1/years-routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

//BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//HTTP Headers Config
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Base Routes
app.use('/api/v1', notebookRoutes);
app.use('/api/v1/year', yearRoutes);

//MongoDB connection
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


