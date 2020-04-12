const {createNotebook} = require('../../controllers/v1/notebook-controllers');

const routes =  (app) => {
    app.get('/', (req, res) => {
        res.send('hello');
    });

    app.get('/info', (req,res) => {
        res.send('info nodemon 2');
    });

    app.get('*', (req,res) => {
        res.status(404).send('NOT_FOUND');
    });

    app.post('/notebook', (req,res) => {
        createNotebook(req,res);
    });
};

module.exports = routes;
