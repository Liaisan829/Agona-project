import { FC } from "react";
import { NavLink } from "react-router-dom";
import { UserModel } from "../model/User.model";
import { formatUserRole } from "../utils/UserUtils";

interface UserProps {
    user: UserModel;
    onDelete: (id: number) => void;
}

export const User: FC<UserProps> = ({ user, onDelete }) => {
    return (
        <div className=''>
            {/*<div className={ cx(styles.userStatus, {*/}
            {/*    userStatusActive: user.isActive,*/}
            {/*}) }/>*/}
            <div className=''>{ user.name }</div>
            <div className=''>Роль: { formatUserRole(user.role) }</div>
            <NavLink to={`/users/${user.id}`}>Перейти</NavLink>

            <button onClick={() => onDelete(user.id)}>X</button>
        </div>
    )
}
