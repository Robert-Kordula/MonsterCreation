
export type CreateSpeedDTO = {
    monster_id: number,
    terrain: number,
    speed: number
}

export const terrains = ['WALK', 'CLIMB', 'BURROW', 'SWIM', 'FLY', 'HOVER'];