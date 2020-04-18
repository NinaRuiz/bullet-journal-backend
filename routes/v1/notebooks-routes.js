const express = require('express');

const notebookControllers = require('../../controllers/v1/notebook-controllers');

const router = express.Router();

//Create Notebook Route
router.post('/notebook/', (req, res) => {
    notebookControllers.createNotebook(req,res);
});

//Delete Notebook Route
router.delete('/notebook/:id', (req,res) => {
    notebookControllers.deleteNotebook(req,res);
});

//Get Notebook Route
router.get('/notebook/:id', (req,res) => {
   notebookControllers.getNotebook(req,res);
});

//Update Notebook Route
router.put('/notebook/:id', (req,res) => {
    notebookControllers.updateNotebook(req,res);
});

//Notebooks pagination
router.get('/notebooks/:page?', (req,res) => {
    notebookControllers.getNotebooks(req,res);
});

module.exports = router;
