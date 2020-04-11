const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const routes = require('./routes/v1');

const app = express();

routes(app);

const PORT = process.env.PORT || 4000;

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


