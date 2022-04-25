import { Speeds } from "../models";
import { SpeedInput, SpeedOutput } from "../models/Speed";
import { Transaction } from "sequelize/types";

export const create = async (payload: SpeedInput, t: Transaction): Promise<SpeedOutput> => {
    const speed = await Speeds.create(payload, {transaction: t});
    return speed;
}