import {Router, Request, Response} from 'express';
import * as TypeController from '../../db/dal/type';
import sequelizeConnection from '../../db/db-config';

const typeRouter = Router();

typeRouter.post('/', async (req: Request, res: Response) => {

});

export default typeRouter;