
import type { IConfirmModal } from "../Types/typeModals.d.ts";
import type { IUser } from "../Types/typeUsers.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
// import useFlashMessage from "../Hook/useFlashMessage.tsx";

export const ConfirmModal = ({title,selectedUser, userList, setUserList, setOpenConfirmModal}: IConfirmModal) => {

    const onClose = () => {
        setOpenConfirmModal(false);
    }

    const { token } = useLoggedStore();

    const onDelete = (user: IUser) => {
        fetch(`http://localhost:8000/delete-user/${user.id.toString()}`, {
            method: "DELETE",
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
                setOpenConfirmModal(false);
            })
            .catch(error => {
                console.error('Il y a une erreur dans la requête de suppression:', error);
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
                    <p key={user.id}> Voulez-vous supprimer <span>{user.username} (id: {user.id})</span> ?</p> ))}
                </div>
                {userList.filter(user => user.id === selectedUser.id).map(user => (
                <div key={user.id} className="modal-footer">
                    <button className={"footer__button-cancel"} type={"button"} onClick={onClose}>Annuler</button>
                    <button className={"footer__button-confirm"} type={"button"} onClick={() => onDelete(user)}>Confirmer</button>
                </div>
                ))}
            </div>
        </div>
    );
}
