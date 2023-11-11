import type { IUpdateUserModal } from "../Types/typeModals.d.ts";
import type { IUser } from "../Types/typeUsers.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
import useFlashMessage from "../Hook/useFlashMessage.tsx";

export const UpdateUserModal = ({title,selectedUser, userList, setUserList, setOpenUpdateModal}: IUpdateUserModal) => {

    const onClose = () => {
        setOpenUpdateModal(false);
    }

    const { token } = useLoggedStore();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage("");
    const toastOptionsError = createDefaultToastOptions({type: 'error', position: 'top-center', autoClose: 3000});
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});
    const onUpdate = (user: IUser) => {
        fetch(`http://localhost:8000/update-user/${user.id.toString()}`, {
            method: "POST",
            mode: "cors",
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }

        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)

                setUserList(values => {
                    return values.filter(item => item.id.toString() !== user.id.toString())
                })

                toastMessage('Information utilisateur modifiées', toastOptionsSuccess)
                setOpenUpdateModal(false);
            })
            .catch(error => {
                console.error('Il y a une erreur dans la requête de suppression:', error);
                toastMessage('Il y a eu une erreur dans la requête de modificaton', toastOptionsError)
                throw error;
            });
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
                        <div className="modal-footer">
                            <button className={"footer__button-cancel"} type={"button"} onClick={onClose}>Annuler</button>
                            <button className={"footer__button-confirm"} type={"submit"} >Confirmer</button>
                        </div>
                    </form>

                ))}
            </div>
        </div>
    );
}