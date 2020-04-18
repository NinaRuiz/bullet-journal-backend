const express = require('express');

const notebookControllers = require('../../controllers/v1/notebook-controllers');

const router = express.Router();

router.post('/', (req, res) => {
    notebookControllers.createNotebook(req,res);
});

module.exports = router;
