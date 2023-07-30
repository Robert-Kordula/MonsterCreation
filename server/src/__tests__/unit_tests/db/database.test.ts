import dbInit from '../../../db/init';
import Type from '../../../db/dal/type';
import connection from '../../../db/db-config';

beforeAll(async () => {
    dbInit();
});

test('create type', async () => {
    expect.assertions(1);
    const type = await Type.create({
        name: 'Dragon'
    });
    expect(type.name).toEqual('Dragon');
});

test('get type', async () => {
    expect.assertions(2);
    const type = await Type.getByID(1);
    expect(type).toBeDefined();
    expect(type?.name).toEqual('Dragon');
});

afterAll(async () => {
    await connection.close();
});
