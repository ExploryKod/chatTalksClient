import React, {useEffect} from "react";
import type { IConfirmModal } from "../Types/typeModals.d.ts";
import useFlashMessage from "../Hook/useFlashMessage.tsx";

export const ConfirmModal = ({onDelete, onClose, setUserList, modalConfirmRef, user, isVisible, hideModal, title}: IConfirmModal) => {

    // if(!isVisible) return null;

    const {setFlashMessage} = useFlashMessage('');

        // const deleteUser = (id: string) => {
        //     fetch(`http://localhost:8000/delete-user/${id}`, {
        //     method: "DELETE",
        //     })
        //         .then(response => response.json())
        //         .then((data) => {
        //             console.log(data)
        //             hideModal()
        //         setUserList(values => {
        //             return values.filter(item => item.id.toString() !== id)
        //         })
        //             setFlashMessage(data.message);
        //             setTimeout(() => {
        //                 setFlashMessage('');
        //             }, 3000);
        
        //         })
        //         .catch(error => {
        //                 console.error('Il y a une erreur dans la requête de suppression:', error);
        //                 throw error;
        //         });
        // }

    return (
        <div className={`modal` }>
            <div className="modal-content">

                <div className="modal-header">
                    <h2>{title}</h2>
                    <span className="close" onClick={hideModal}>&times;</span>
                </div>
                <div className="modal-body small">
                    <p> Voulez-vous supprimer <span>{user.username}</span> ?</p>
                </div>
                <div className="modal-footer">
                    <button className={"footer__button-cancel"} type={"button"} onClick={onClose}>Annuler</button>
                    <button className={"footer__button-confirm"} type={"button"}  onClick={onDelete} >Confirmer</button>
                </div>
            </div>
        </div>
    );
}
