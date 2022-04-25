import Speeds, { SpeedOutput } from "../../../db/models/Speed";
import { terrains } from "../../dto/speed";

export const toSpeeds = (speeds: SpeedOutput[]): TableNumbers => {
    return speeds.reduce((result: TableNumbers, speed) => {
        let key = terrains[speed.terrain].toLowerCase();
        return result = {
            ...result,
            [key]: speed.speed
        }
    }, {});
}