import type { IUpdateModal } from "./UserList.tsx";

export const UpdateUserModal = ({user, updateUser, isVisible, hideModal}: IUpdateModal) => {

    return isVisible ? (
        <div className={`modal` }>
            <div className="modal-content">

                <div className="modal-header">
                    <h2>Confirmation</h2>
                    <span className="close" onClick={hideModal}>&times;</span>
                </div>
                <div className="modal-body small">
                    <p> Voulez-vous supprimer {user.username} ?</p>
                </div>
                <div className="modal-footer">
                    <button className={"footer__button-cancel"} type={"button"} onClick={hideModal}>Annuler</button>
                    <button className={"footer__button-confirm"} type={"button"} onClick={() => {updateUser(user.id.toString())}} >Confirmer</button>
                </div>
            </div>
        </div>
    ) : null;
}