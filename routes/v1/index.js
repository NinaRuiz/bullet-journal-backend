const {createNotebook} = require('../../controllers/v1/notebook-controllers');
const yearsRoutes = require('years-routes');

module.exports = app => {
    app.use('/api/v1/years', yearsRoutes);
};

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
