import express, { Router, Request, Response } from 'express';
import { CreateMonsterDTO } from '../dto/monster';
import * as monsterController from '../../db/dal/monster';
import * as typeController from '../../db/dal/type';
import * as subtypeController from '../../db/dal/subtype';
import * as groupController from '../../db/dal/group';
import * as alignmentController from '../../db/dal/alignment';
import * as speedController from '../../db/dal/speed';
import * as dmgController from '../../db/dal/damage';
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
            
            let type = await typeController.create({name: req.body.type});
            
            let subtype = await subtypeController.create({name: req.body.subtype});

            let group = await groupController.create({name: req.body.group});

            let alignment = await alignmentController.create({name: req.body.alignment});
            
            let monster = await monsterController.create(payload);

            //let speed = await speedController.createMultiple(req.body.speed, monster.id);
            
            //let dmgVul = await dmgController.addMultiple(req.body.damage_vulnerabilities, monster.id, 'vul');
            
            //console.log(dmgVul);

            final = {
                ...monster, 
                type: type, 
                subtype: subtype, 
                group: group, 
                alignment: alignment, 
                //speed: speed,
                //damage_vulnerabilities: dmgVul
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