const createNotebook = (req,res) => {
    try{
        console.log('req.body', req.body);
        res.send({
            status: 'OK',
            message: 'user created'
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
