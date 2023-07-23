import {Router, Request, Response} from 'express';
import * as TypeController from '../../db/dal/type';
import sequelizeConnection from '../../db/db-config';

const typeRouter = Router();

typeRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await sequelizeConnection.transaction(async () => {
            return TypeController.create({name: req.body['type']});
        });

        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

export default typeRouter;