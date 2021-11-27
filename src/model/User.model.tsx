export enum RoleEnum {
    User,
    Moderator,
    Admin
}

export interface UserModel {
    name: string,
    role: RoleEnum,
    isActive: boolean,
    id: number
}