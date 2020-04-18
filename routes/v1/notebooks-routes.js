const express = require('express');

const notebookControllers = require('../../controllers/v1/notebook-controllers');

const router = express.Router();

//Create Notebook Route
router.post('/', (req, res) => {
    notebookControllers.createNotebook(req,res);
});

//Delete Notebook Route
router.delete('/:id', (req,res) => {
    notebookControllers.deleteNotebook(req,res);
});

//Get Notebook Route
router.get('/:id', (req,res) => {
   notebookControllers.getNotebook(req,res);
});

//Update Notebook Route
router.put('/:id', (req,res) => {
    notebookControllers.updateNotebook(req,res);
});

module.exports = router;
