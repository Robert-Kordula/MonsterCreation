import { Monster, Type, SubType, Group, Alignment } from '../db/models/index';

const dbInit = () => Promise.all([
    Monster.sync({alter: true}),
    Type.sync({alter: true}),
    SubType.sync({alter: true}),
    Group.sync({alter: true}),
    Alignment.sync({alter: true})
]);

export default dbInit;