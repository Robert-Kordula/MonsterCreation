import express, { Router, Request, Response } from 'express';
import monsterController from '../../db/dal/monster';
import { Monster_Model } from '../../db/models/Monster';


const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    console.log('FINDING ALL MONSTERS');
    const results = await monsterController.getAll();
    res.status(200).send(results);
});

monsterRouter.post('/', async (req: Request, res: Response) => {
    console.log('Adding new monster');
    try {
        let monster = await monsterController.create(req.body as Monster_Model);
        console.log(`${monster.id} has been created`);
        res.status(200);
    } catch (error) {

    }
});

export default monsterRouter;