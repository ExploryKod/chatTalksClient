import type { IUpdateUserModal } from "../Types/typeModals.d.ts";
import type { IUser } from "../Types/typeUsers.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
import useFlashMessage from "../Hook/useFlashMessage.tsx";
import config from "../config/config.tsx";
import React, {useState} from "react";

export const UpdateUserModal = ({title,selectedUser, userList, setUserList, setOpenUpdateModal}: IUpdateUserModal) => {
    const serverHost: string = config.serverHost;
    const onClose = () => {
        setOpenUpdateModal(false);
    }

    const { token } = useLoggedStore();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage("");
    const toastOptionsError = createDefaultToastOptions({type: 'error', position: 'top-center', autoClose: 3000});
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});
    const [updatedData, setUpdatedData] = useState<IUser>({id: selectedUser.id,username: "", admin: ""})
    const onUpdate = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${serverHost}/update-user`, {
                method: 'POST',
                mode: "cors",
                body: new URLSearchParams({
                    id: updatedData.id.toString(),
                    username: updatedData.username,
                    admin: updatedData.admin
                }),
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                toastMessage(data.message, toastOptionsSuccess);
                setUserList(values => {
                    return values.map(item => item.id === selectedUser.id ? {...item, ...updatedData} : item)
                })
            } else if (response.status !== 500) {
                const errorData = await response.json();
                console.error("échec de la modification:", errorData);
                toastMessage(errorData.message, toastOptionsError);
            }
        } catch(error) {
            console.error('log failed:', error);
            toastMessage('Il y a eu une erreur dans la requête', toastOptionsError)
        }
    };

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
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
                    <form key={user.id} onSubmit={onUpdate}>

                        <label htmlFor="username">Nom d'utilisateur: </label>
                        <input type="text" name="username" id="username" placeholder={user.username} onChange={handleUserChange}/>
                        <label htmlFor="email">Adminstrateur ? </label>
                        <input type="text" name="admin" id="admin" placeholder={user.admin} onChange={handleUserChange}/>

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