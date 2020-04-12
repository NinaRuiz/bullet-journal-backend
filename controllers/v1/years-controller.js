const years = require('../../mongodb/models/years');

const createYear = async (req,res) => {
    try {
        const {year, notebook} = req.body;

        await years.create({
            year: year,
            notebook: notebook
        });

        res.send({
            status: 'OK',
            message: 'year created'
            })
    }catch (error) {
        console.log('Create year:', error);
        res.status(500).send({
            status: 'ERROR',
            message: error.message
        })
    }
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
