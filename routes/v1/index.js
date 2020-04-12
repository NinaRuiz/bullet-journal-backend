const notebookRoutes = require('notebooks-routes');
const yearsRoutes = require('years-routes');

module.exports = app => {
    app.use('api/v1/notebook', notebookRoutes);
    app.use('/api/v1/years', yearsRoutes);
};

module.exports = routes;
