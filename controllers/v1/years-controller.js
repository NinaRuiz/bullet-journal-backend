const years = require('../../mongodb/models/years');
const bodyparser = require('body-parser');

const createYear = (req,res) => {
};

const deleteYear = (req,res) => {
    res.send({
        status: 'OK',
        message: 'user deleted'
    });
};

const getYear = (req,res) => {
    res.send({
        status: 'OK',
        data: []
    });
};

const updateYear = (req,res) => {
    res.send({
        status: 'OK',
        message: 'user updated'
    });
};

module.exports = {
    createYear,
    deleteYear,
    getYear,
    updateYear
};
