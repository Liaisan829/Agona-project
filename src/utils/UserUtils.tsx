import { RoleEnum } from '../model/User.model';
import { useContext } from 'react';
import  MainStore  from '../store/MainStore';
import { MobXProviderContext } from 'mobx-react';

export const formatUserRole = (role: RoleEnum): string => {
    switch (role) {
        case RoleEnum.Admin:
            return 'Администратор';
        case RoleEnum.Moderator:
            return 'Модератор';
        default:
            return 'Пользователь'
    }
}

export function useStores(): MainStore {
    return useContext(MobXProviderContext) as MainStore;
}
