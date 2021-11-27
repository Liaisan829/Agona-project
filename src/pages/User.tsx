import { observer } from "mobx-react";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserModel } from "../model/User.model";
import { formatUserRole, useStores } from "../utils/UserUtils";
import {MainContainer} from "./MainContainer";

interface Params {
    id: string;
}

export const User: FC = observer(() => {
    const { id } = useParams<Params>();
    const [user, setUser] = useState<UserModel>();
    const { userStore: { users } } = useStores();

    useEffect(() => {
        const user = users.find(user => user.id === +id);

        setUser(user);
    }, [id, users]);

    return (
        <MainContainer>
            { user && (
                <ul>
                    <li>Имя: {user.name}</li>
                    <li>Роль: {formatUserRole(user.role)}</li>
                    <li>
                        {user.isActive ? 'Подтвержден' : 'Не одтвержден'}
                    </li>
                </ul>
            )}
        </MainContainer>
    )
});
