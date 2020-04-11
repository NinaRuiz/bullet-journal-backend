const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const routes = require('./routes/v1');

const app = express();

console.log('MONGO', process.env.MONGO);

routes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log('running on '+ PORT);
});
