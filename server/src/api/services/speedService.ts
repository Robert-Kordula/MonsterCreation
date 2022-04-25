import { Transaction } from "sequelize/types";
import * as speedDal from '../../db/dal/speed';
import { SpeedOutput } from "../../db/models/Speed";
import { CreateSpeedDTO, terrains } from "../dto/speed";


export const createMultiple = async (payload: TableNumbers, id: number, t: Transaction): Promise<SpeedOutput[]> => {
    
    let results = [];
    let speeds = getSpeedsFromJSON(payload);
    console.log(speeds);

    for (let i = 0; i < speeds.length; i++) {
        let speed = await speedDal.create(speeds[i], t);
        console.log(speed);
        results.push(speed);
    }
    console.log(JSON.stringify(results));
    return results;
}

const getSpeedsFromJSON = (payload: TableNumbers): CreateSpeedDTO[] => {
    let keys = Object.keys(payload);

    return keys.map((speed) => { return {monster_id: payload.id, terrain: terrains.indexOf(speed.toUpperCase()), speed: payload[speed]}})
}
