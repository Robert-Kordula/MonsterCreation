import {Router, Request, Response} from 'express';
const methods = require('./methods');
import sequelizeConnection from '../../db/db-config';

const typeRouter = Router();

typeRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await sequelizeConnection.transaction(async (t) => {
            return methods.createType(req.body['type'], t);
        });

        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

export default typeRouter;