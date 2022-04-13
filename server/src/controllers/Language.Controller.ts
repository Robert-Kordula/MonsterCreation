import {Request, Response} from 'express';

const db = require('../models/db');
const Language = db.languages;
const Op = db.Sequelize.Op;

exports.create = async (req: Request, res: Response) => {

    if (!req.body.monster_id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
        return;
    }

    const language = {
        monster_id: req.body.monster_id,
        language_id: req.body.language_id
    };

    try {
        let data = await Language.create(language);
        res.send(data);
    } catch (err) {
        let message = 'Some error occured while creating the Language';
        if (err instanceof Error) message = err.message;
        res.status(500).send({
            message: message
        })
    }
};