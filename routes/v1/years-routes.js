const express = require('express');

const yearsControllers = require('../../controllers/v1/years-controller');

const router = express.Router();

router.post('/', (req, res) => {
    yearsControllers.createYear(req, res);
});

module.exports = router;

