import { useContext } from 'react';
import  MainStore  from '../store/MainStore/MainStore';
import { MobXProviderContext } from 'mobx-react';

export function useStores(): MainStore {
    return useContext(MobXProviderContext) as MainStore;
}
