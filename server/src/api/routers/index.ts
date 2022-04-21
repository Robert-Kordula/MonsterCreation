import { Router } from 'express';
import monsterRouter from './monsterRouter';

const router = Router();

router.use('/monsters', monsterRouter);

export default router;