import express, { Router, Request, Response } from 'express';
import { CreateMonsterDTO } from '../dto/monster';
import * as monsterController from '../controllers/monster/monster';
import * as typeController from '../controllers/name/type';
import * as subtypeController from '../controllers/name/subtype';
import * as groupController from '../controllers/name/group';
import * as alignmentController from '../controllers/name/alignment';
import * as speedController from '../controllers/speed/speed';
import * as dmgController from '../controllers/damage/damage';
import sequelizeConnection from '../../db/db-config';


const monsterRouter = Router();

monsterRouter.get('/', async (req: Request, res: Response) => {
    console.log('FINDING ALL MONSTERS');
    const results = await monsterController.getAll();
    res.status(200).send(results);
});

monsterRouter.post('/', async (req: Request, res: Response) => {
    console.log('Adding new monster');
    const payload: CreateMonsterDTO = req.body;
    console.log(payload);
    try {
        const result = await sequelizeConnection.transaction(async (t) => {
            let final = {};
            
            let type = await typeController.create({name: req.body.type}, t);
            
            let subtype = await subtypeController.create({name: req.body.subtype}, t);

            let group = await groupController.create({name: req.body.group}, t);

            let alignment = await alignmentController.create({name: req.body.alignment}, t);
            
            let monster = await monsterController.create(payload, t);

            let speed = await speedController.createMultiple(req.body.speed, monster.id, t);
            
            let dmgVul = await dmgController.addMultiple(req.body.damage_vulnerabilities, monster.id, t, 'vul');
            
            console.log(dmgVul);

            final = {
                ...monster, 
                type: type, 
                subtype: subtype, 
                group: group, 
                alignment: alignment, 
                speed: speed,
                damage_vulnerabilities: dmgVul
            };
            return final;
        });
        console.log(result);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

export default monsterRouter;