import Monster from '../../../db/dal/monster'
import database from '../../../db/db-config';

beforeAll(async () => {
    await database.sync({force: true});
});

test('create person', async () => {
    expect.assertions(1);
    const monster = await Monster.create({
        'name': 'Aatxe',
        'size': 2,
        'armor_class': 14,
        'armor_desc': 'natural armor',
        'hit_points': 105,
        'hit_dice': '10d10+50',
        'strength': 22,
        'dexterity': 12,
        'constitution': 20,
        'intelligence': 10,
        'wisdom': 14,
        'charisma': 14,
        'challenge_rating': 5,
        'legendary_desc': '',
    });
    expect(monster.name).toEqual('Aatxe');
});

test('get person', async () => {
    expect.assertions(2);
    const monster = await Monster.findByID(1);
    expect(monster).toBeDefined();
    expect(monster?.name).toEqual('Aatxe');
});

test('delete person', async () => {
    expect.assertions(2);
    let noDeleted = await Monster.deleteMonster(1);
    const monster = await Monster.findByID(1);
    expect(noDeleted).toEqual(1)
    expect(monster).toBeNull();
});

afterAll(async () => {
    await database.close();
});
