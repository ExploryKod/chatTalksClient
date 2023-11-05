
import type { IConfirmRoomModal } from "../Types/typeModals.d.ts";
import type { IRoom } from "../Types/typeRooms.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
// import useFlashMessage from "../Hook/useFlashMessage.tsx";

export const ConfirmRoomModal = ({title,selectedRoom, roomList, setRoomList, setOpenConfirmRoomModal}: IConfirmRoomModal) => {

    const onClose = () => {
        setOpenConfirmRoomModal(false);
    }

    const { token } = useLoggedStore();

    const onDelete = (room: IRoom) => {
        fetch(`http://localhost:8000/delete-room/${room.id.toString()}`, {
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

                setRoomList(values => {
                    return values.filter(item => item.id.toString() !== room.id.toString())
                })
                setOpenConfirmRoomModal(false);
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
                    {roomList.filter(room => room.id === selectedRoom.id).map(room => (
                        <p key={room.id}> Voulez-vous supprimer <span>{room.name} (id: {room.id})</span> ?</p> ))}
                </div>
                {roomList.filter(room => room.id === selectedRoom.id).map(room => (
                    <div key={room.id} className="modal-footer">
                        <button className={"footer__button-cancel"} type={"button"} onClick={onClose}>Annuler</button>
                        <button className={"footer__button-confirm"} type={"button"} onClick={() => onDelete(room)}>Confirmer</button>
                    </div>
                ))}
            </div>
        </div>
    );
}