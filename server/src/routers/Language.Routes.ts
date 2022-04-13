const Express = require('express');

module.exports = (app: any) => {
    const languages = require('../controllers/Language.Controller');
    let router = require('express').Router();
    router.post('/language', languages.create);

    router.get('/language', languages.findAll);

    app.use('/monster', router);
};