import express, { Router, Request, Response } from 'express';
import { CreateMonsterDTO } from '../dto/monster';
import * as monsterController from '../controllers/monster/monster';

const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    console.log('FINDING ALL MONSTERS');
    const results = await monsterController.getAll();
});

monsterRouter.post('/', async (req: Request, res: Response) => {
    console.log('Adding new monster');
    console.log(req.body);
    const payload: CreateMonsterDTO = req.body;
    const result = await monsterController.create(payload);

    return res.status(200).send(result);
});

export default monsterRouter;