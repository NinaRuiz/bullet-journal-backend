const Notebook = require('../../mongodb/models/notebooks');
const mongoosePaginate = require('mongoose-pagination');


// Create Notebook method
const createNotebook = (req,res) => {
    try{
        const {name} = req.body;

        Notebook.create({
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

//Delete Notebook method
const deleteNotebook = (req,res) => {
    const notebookId = req.params.id;

    Notebook.findByIdAndRemove(notebookId, (err, notebookRemoved) => {
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

//Get Notebook method
const getNotebook = (req,res) => {
    const notebookId = req.params.id;

    Notebook.findById(notebookId, (err, notebookFind) => {
       if(err){
           return res.status(500).send({status: 'Error', message: err.message});
       }else{
        if(!notebookFind){
            return res.status(404).send({status: 'Error', message: 'Notebook not found.'});
        }else{
            res.status(202).send(notebookFind);
        }
       }
    });
};

//Update Notebook method
const updateNotebook = (req,res) => {
    const notebookId = req.params.id;
    const update = req.body;

    Notebook.findByIdAndUpdate(notebookId, update, (err, notebookUpdated)=> {
        if(err){
            return res.status(500).send({status: 'Error', message: err.message});
        }else {
            if (!notebookUpdated) {
                return res.status(404).send({status: 'Error', message: 'Notebook cannot be updated.'});
            } else {
                res.status(202).send(notebookUpdated);
            }
        }
    });
};

//Pagination method
const getNotebooks = (req,res) => {
    const page = req.params.page || 1;

    const itemsPerPage = 3;

    Notebook.find().paginate(page, itemsPerPage, (err, notebooks, total) => {
       if(err){
           return res.status(500).send({status: 'Error', message: 'Error en la petición'});
       } else {
           if(!notebooks){
               return res.status(404).send({status: 'Error', message: 'There isn\'t any notebooks'});
           }else{
               return res.status(202).send({
                   pages: total,
                   notebooks: notebooks
               })
           }
       }
    });
};

module.exports = {
    createNotebook,
    deleteNotebook,
    getNotebook,
    updateNotebook,
    getNotebooks
};
