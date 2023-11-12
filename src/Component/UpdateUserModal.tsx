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
    const [updatedData, setUpdatedData] = useState<IUser>({id: selectedUser.id,username: "", admin: "", email: ""})
    const onUpdate = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const initialEmail: string = selectedUser.email ? selectedUser.email : "";

        try {
            const response = await fetch(`${serverHost}/update-user`, {
                method: 'POST',
                mode: "cors",
                body: new URLSearchParams({
                    id: updatedData.id.toString(),
                    username: updatedData.username != "" ? updatedData.username : selectedUser.username,
                    admin: updatedData.admin != "" ? updatedData.admin : selectedUser.admin,
                    email: updatedData.email ? updatedData.email : initialEmail
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
        if(e.target.value !== "") {
            setUpdatedData(prevState => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    return (
        <div className={`modal` }>
            <div className="modal-content large">

                <div className="modal-header">
                    <h2>{title}</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    {userList.filter(user => user.id === selectedUser.id).map(user => (
                        <p key={user.id}> Modifier <span>{user.username} (id: {user.id})</span> ?</p> ))}
                </div>
                {userList.filter(user => user.id === selectedUser.id).map(user => (
                    <form className="form-container" key={user.id} onSubmit={onUpdate}>
                        <div className="form-elem align-start">
                            <label htmlFor="username">Nom d'utilisateur *: </label>
                            <input required type="text" name="username" id="username" placeholder={user.username} onChange={handleUserChange}/>
                        </div>
                        <div className="form-elem align-start">
                            <label htmlFor="status">Adminstrateur ? </label>
                            <input type="text" name="admin" id="status" placeholder={user.admin} onChange={handleUserChange}/>
                        </div>
                        <div className="form-elem align-start">
                            <label htmlFor="email">Email </label>
                            <input type="text" name="admin" id="email" placeholder={user.email ? user.email : "Aucun email renseigné"} onChange={handleUserChange}/>
                        </div>

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