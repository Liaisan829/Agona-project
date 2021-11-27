import { observer } from "mobx-react";
import { User } from "../components/User";
import { RoleEnum } from "../model/User.model";
import { useStores } from "../utils/UserUtils";
import { MainContainer } from "./MainContainer";

export const Users = observer(() => {
    const { userStore: { addUser, users, removeUser} } = useStores();

    const handleAddUser = (): void => {
        const randomNumber = Math.floor(Math.random() * (10000 - 1) + 1);

        addUser({
            id: randomNumber,
            name: `Пользователь ${ randomNumber }`,
            isActive: true,
            role: RoleEnum.User
        });
    };

    const onDelete = (id: number): void => {
        removeUser(id);
    };

    return (
        <MainContainer>
            <h4>Пользователи</h4>


            <div>
                { users.map(user => (
                     <User key={ user.name } user={ user } onDelete={ onDelete }/>
                )) }

                <button onClick={ handleAddUser }>Добавить пользователей</button>
            </div>
        </MainContainer>
    )
});
