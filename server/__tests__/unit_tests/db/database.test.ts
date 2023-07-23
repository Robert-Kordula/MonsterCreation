import { default as db } from '../../../src/db/db-config';

import * as MonsterDB from '../../../src/db/dal/monster';

beforeAll(async () => {
    await db.sync({ force: true });
});

test('create person', async () => {
    expect.assertions(1);
    const monster = await MonsterDB.create({
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
        'perception': 0,
        'challenge_rating': 5,
        'strength_save': 0,
        'dexterity_save': 0,
        'intelligence_save': 0,
        'wisdom_save': 0,
        'charisma_save': 0,
        'legendary_desc': ''
    });
    expect(monster.name).toEqual('Aatxe');
});

test('get person', async () => {
    expect.assertions(2);
    const monster = await MonsterDB.findByID(1);
    expect(monster).toBeDefined();
    expect(monster?.name).toEqual('Aatxe');
});

test('delete person', async () => {
    expect.assertions(2);
    let noDeleted = await MonsterDB.deleteMonster(1);
    const monster = await MonsterDB.findByID(1);
    expect(noDeleted).toEqual(1)
    expect(monster).toBeNull();
});

afterAll(async () => {
    await db.close();
});