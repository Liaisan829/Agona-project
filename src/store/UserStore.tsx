import {RoleEnum, UserModel} from "../model/User.model";
import {action, observable} from "mobx";

export class UserStore {
    @observable users: Array<UserModel> = [
        {
            name: 'User 1',
            role: RoleEnum.User,
            isActive: true,
            id: 1
        },
        {
            name: 'User 2',
            role: RoleEnum.Admin,
            isActive: true,
            id: 2
        },
        {
            name: 'User 3',
            role: RoleEnum.Moderator,
            isActive: true,
            id: 3
        },
        {
            name: 'User 4',
            role: RoleEnum.User,
            isActive: false,
            id: 4
        }
    ];
    //observable поле внутри стора

    //action чтобы менять поля эти
    @action
    addUser = (user: UserModel) => {
        this.users.push(user);
    }

    @action
    removeUser = (userId: number) => {
        const userIndex = this.users.findIndex((user: UserModel) => user.id === userId);
        this.users.splice(userIndex, 1);
    }


}


//здесь будут пооля расширенные mobx