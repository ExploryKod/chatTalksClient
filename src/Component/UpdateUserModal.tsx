import type { IUpdateUserModal } from "../Types/typeModals.d.ts";
import type { IUser } from "../Types/typeUsers.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
import useFlashMessage from "../Hook/useFlashMessage.tsx";
import config from "../config/config.tsx";
import React from "react";

export const UpdateUserModal = ({title,selectedUser, userList, setUserList, setOpenUpdateModal}: IUpdateUserModal) => {
    const serverHost: string = config.serverHost;
    const onClose = () => {
        setOpenUpdateModal(false);
    }

    const { token } = useLoggedStore();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage("");
    const toastOptionsError = createDefaultToastOptions({type: 'error', position: 'top-center', autoClose: 3000});
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});
    const onUpdate = (user: IUser) => {
        fetch(`${serverHost}/update-user`, {
            method: "POST",
            mode: "cors",
            credentials: 'same-origin',
            body: JSON.stringify({
                id: user.id,
                username: user.username,
                role: user.role
            }),
            headers: {
                'Authorization': `Bearer ${token}`
            }

        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                toastMessage('Information utilisateur modifiées', toastOptionsSuccess)
                setOpenUpdateModal(false);
            })
            .catch(error => {
                console.error('Il y a une erreur dans la requête de suppression:', error);
                toastMessage('Il y a eu une erreur dans la requête de modificaton', toastOptionsError)
                throw error;
            });
    }

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUserList(values => {
            return values.map(item => {
                if(item.id === selectedUser.id) {
                    return {...item, username: value}
                }
                return item;
            })
        })
    }

    const handleUserRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUserList(values => {
            return values.map(item => {
                if(item.id === selectedUser.id) {
                    return {...item, role: value}
                }
                return item;
            })
        })
    }

    return (
        <div className={`modal` }>
            <div className="modal-content">

                <div className="modal-header">
                    <h2>{title}</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body small">
                    {userList.filter(user => user.id === selectedUser.id).map(user => (
                        <p key={user.id}> Voulez-vous modifier <span>{user.username} (id: {user.id})</span> ?</p> ))}
                </div>
                {userList.filter(user => user.id === selectedUser.id).map(user => (
                    <form key={user.id} onSubmit={() => onUpdate(user)}>

                        <label htmlFor="username">Nom d'utilisateur: </label>
                        <input type="text" name="username" id="username" placeholder={user.username} onChange={handleUserNameChange}/>
                        <label htmlFor="email">Role: </label>
                        <input type="text" name="role" id="role" placeholder={user.role} onChange={handleUserRoleChange}/>
                        <input type="hidden" name="id" value={user.id} />

                        <div className="modal-footer">
                            <button className={"footer__button-cancel"} type={"button"} onClick={onClose}>Annuler</button>
                            <button className={"footer__button-confirm"} type={"submit"} >Modifier</button>
                        </div>
                    </form>

                ))}
            </div>
        </div>
    );
}