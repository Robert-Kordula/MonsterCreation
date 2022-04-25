import { Transaction } from "sequelize/types";
import { Speeds } from "../../../db/models";
import * as service from '../../services/speedService';
import * as mapper from './mapper';

export const createMultiple = async (payload: TableNumbers, id: number, t: Transaction): Promise<TableNumbers> => {
    console.log(payload);
    return mapper.toSpeeds(await service.createMultiple(payload, id, t));
}