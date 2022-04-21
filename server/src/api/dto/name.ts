import { Optional } from "sequelize/types"

export type CreateNameDTO = {
    name: string
}

export type UpdateNameDTO = Optional<CreateNameDTO, 'name'>