const notebook = require('../../mongodb/models/notebooks');
const bodyparser = require('body-parser');

const createNotebook = (req,res) => {
    try{
        const {name} = req.body;

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
    const notebookId = req.params.id;

    notebook.findByIdAndRemove(notebookId, (err, notebookRemoved) => {
       if(err){
          return res.status(500).send({status: 'Error', message: err.message});
       }else{
         if(!notebookRemoved){
             return res.status(404).send({status: 'Error', message: 'Notebook not found.'});
         }else{
             res.status(202).send(notebookRemoved);
         }
       }
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
