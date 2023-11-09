import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { IRoom } from "../Types/typeRooms.d.ts";

import userRoomsList from "../Hook/useGetRoomsList";

import { ConfirmRoomModal } from "./ConfirmRoomModal.tsx";

import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { Tooltip } from "./Tooltip.tsx";
import useFlashMessage from "../Hook/useFlashMessage.tsx";

export default function RoomList() {
    // const {isVisible, toggleModal} = useToggleModal();
    // const modalConfirmRef = useRef<HTMLDivElement | null>(null);
    const [openConfirmRoomModal, setOpenConfirmRoomModal] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const { toastMessage } = useFlashMessage('');

    const [roomList, setRoomList] = useState<IRoom[]>([]);
    const [selectedRoom, setSelectedRoom] = useState<IRoom>();
    const getRoomList = userRoomsList();

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const data = await getRoomList();
                console.log('roomlist data', data);
                setRoomList(data);
            } catch (error) {
                console.error("Erreur dans la requête des listes de rooms: ", error);
                toastMessage('Erreur dans la requête des rooms existantes');
            }
        };

        fetchRoomData();

    },[]);

    const handleDeleteRoom = (user: IRoom) => {
        setSelectedRoom(user);
        setOpenConfirmRoomModal(true);
    };


    useEffect(() => {
        // Ajoute un gestionnaire d'événement de clic global lorsque le composant est monté
        // setIsLoading(false);
        setOpenConfirmRoomModal(false);
        setSelectedRoom(undefined);
    }, []);

    return (
        <>
            <div className={"user-list__container"}>
                {!roomList || !roomList.length ?
                    (<div>
                        <h1 className="category-text"> Aucune salle de chat en vue... Soyez le premier à en créer une</h1>
                        <Link to="/chat" className="button-container width-50-centered">Créer ma salle</Link>
                    </div>

                    ):
                    <h1 className="category-text"> Liste des salles de chat: </h1> }
                <section className="table-container">
                    <div className="table">
                        {roomList && roomList?.length > 0 && (
                            <div className="table-header table-row">
                                <div>Identifiant</div>
                                <div>Nom de salle</div>
                                <div>Thème</div>
                                <div>Actions</div>
                            </div>)}

                        {roomList && roomList?.map((room) => (
                            <div key={room.id} className="body-row">
                                <div>{room.id}</div>
                                <div>{room.name ? room.name : "salle de chat"}</div>
                                <div>{room.description? room.description : "Aucun thème"}</div>
                                    <div className={"table-row__actions"}>
                                        <Tooltip content="Supprimer" direction="top">
                                            <IconContext.Provider value={{ color: "#de392a", className: "trash-icon"}}>
                                                <div>
                                                    <button title="delete room" type="button" className="btn-reset" onClick={() => handleDeleteRoom(room)}>
                                                        <RiDeleteBin6Line className={"trash-icon"} />
                                                    </button>
                                                </div>
                                            </IconContext.Provider>
                                        </Tooltip>
                                        <Tooltip content="Modifier" direction="top">
                                            <IconContext.Provider value={{ color: "blue", className: "update-icon" }}>
                                                <div>
                                                    <button title="delete room" type="button" className="btn-reset" >
                                                        <FaUserCog className={"update-icon"} />
                                                    </button>
                                                </div>
                                            </IconContext.Provider>
                                        </Tooltip>
                                    </div>
                            </div>
                        ))}
                        {openConfirmRoomModal && (
                            <ConfirmRoomModal
                                roomList={roomList}
                                setRoomList={setRoomList}
                                selectedRoom={selectedRoom}
                                setOpenConfirmRoomModal={setOpenConfirmRoomModal}
                                title={"Supprimer une salle"}
                            />
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}