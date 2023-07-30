import Alignment from './models/Alignment';
import Group from './models/Group';
import Monster from './models/Monster';
import Type from './models/Type';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => Promise.all([
    Monster.sync({alter: isDev}),
    Type.sync({alter: isDev}),
    Alignment.sync({alter: isDev}),
    Group.sync({alter: isDev})
])
    

export default dbInit;