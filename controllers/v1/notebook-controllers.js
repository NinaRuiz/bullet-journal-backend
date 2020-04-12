const notebook = require('../../mongodb/models/notebooks');
const bodyparser = require('body-parser');

const createNotebook = (req,res) => {
    try{
        const {name} = req.body;

        console.log('req.body', req.body);

        notebook.create({
            name: name
        });

        return res.send({
            status: 'OK',
            message: 'notebook created'
        })
    }catch (error){
        res.status(500).send({
            status: 'Error',
            message: error.message
        });
    }
};

const deleteNotebook = (req,res) => {
    res.send({
        status: 'OK',
        message: 'user deleted'
    });
};

const getNotebook = (req,res) => {
    res.send({
        status: 'OK',
        data: []
    });
};

const updateNotebook = (req,res) => {
    res.send({
        status: 'OK',
        message: 'user updated'
    });
};

module.exports = {
    createNotebook,
    deleteNotebook,
    getNotebook,
    updateNotebook
};
