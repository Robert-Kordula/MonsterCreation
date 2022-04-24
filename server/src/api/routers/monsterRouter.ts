import express, { Router, Request, Response } from 'express';
import { CreateMonsterDTO } from '../dto/monster';
import * as monsterController from '../controllers/monster/monster';
import * as typeController from '../controllers/name/type';
import * as subtypeController from '../controllers/name/subtype';
import * as groupController from '../controllers/name/group';
import * as alignmentController from '../controllers/name/alignment';
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
            
            //Checks if monster type is passed as a string and if it already exists
            let type: number | null;
            console.log(typeof req.body['type']);
            if (typeof req.body['type'] === 'string') {
                type = await typeController.getIDFromName(req.body['type'], t);
                if (type === -1) {
                    type = await typeController.create({name: req.body['type']}, t);
                }
            } else if(typeof req.body['type'] === 'number') {
                await typeController.getByID(req.body['type']);
                type = req.body['type'];
            } else if (req.body['type'] === null) {
                throw new Error('Type cannot be null');
            }
            else {
                throw new Error('Invalid format for Type');
            }

            //Checks if monster subtype is passed as a string and if it already exists
            let subtype: number | null;
            console.log(typeof req.body['subtype']);
            if (typeof req.body['subtype'] === 'string') {
                subtype = await subtypeController.getIDFromName(req.body['subtype'], t);
                if (subtype === -1) {
                    subtype = await subtypeController.create({name: req.body['subtype']}, t);
                }
            } else if(typeof req.body['subtype'] === 'number') {
                await subtypeController.getByID(req.body['subtype']);
                subtype = req.body['subtype'];
            } else if (req.body['subtype'] === null) {
                subtype = null;
            }
            else {
                throw new Error('Invalid format for SubType');
            }

            //Checks if monster group is passed as a string and if it already exists
            let group: number | null;
            console.log(typeof req.body['group']);
            if (typeof req.body['group'] === 'string') {
                group = await groupController.getIDFromName(req.body['group'], t);
                if (group === -1) {
                    group = await groupController.create({name: req.body['group']}, t);
                }
            } else if(typeof req.body['group'] === 'number') {
                await groupController.getByID(req.body['group']);
                group = req.body['group'];
            } else if (req.body['group'] === null) {
                group = null;
            }
            else {
                throw new Error('Invalid format for Group');
            }

            //Checks if monster alignment is passed as a string and if it already exists
            let alignment: number;
            console.log(typeof req.body['alignment']);
            if (typeof req.body['alignment'] === 'string') {
                alignment = await alignmentController.getIDFromName(req.body['alignment'], t);
                if (alignment === -1) {
                    alignment = await alignmentController.create({name: req.body['alignment']}, t);
                }
            } else if(typeof req.body['alignment'] === 'number') {
                await alignmentController.getByID(req.body['alignment']);
                alignment = req.body['alignment'];
            } else if (req.body['alignment'] === null) {
                throw new Error('Alignment cannot be null');
            }
            else {
                throw new Error('Invalid format for Alignment');
            }


            const monster = await monsterController.create(payload, t);

            
            final = {...monster, type: type, subtype: subtype, group: group, alignment: alignment};
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