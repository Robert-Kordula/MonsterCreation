import { Router, Request, Response } from 'express';
import monsterDAL from '../../db/dal/monster';
import Monster, { MonsterInput } from '../../db/models/Monster';


const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    console.log('FINDING ALL MONSTERS');
    const results = await monsterDAL.getAll();
    res.status(200).send(results);
});

monsterRouter.post('/', async (req: Request, res: Response) => {
    console.log('Adding new monster');
    try {
        let monster = await monsterDAL.create(req.body as MonsterInput);
        console.log(`${monster.id} has been created`);
        res.send(monster.id).status(200);
    } catch (error) {
        console.error(error);
        res.status(400);
    }
});

export default monsterRouter;