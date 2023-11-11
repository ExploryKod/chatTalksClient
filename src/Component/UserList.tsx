import {useEffect, useState } from "react";

import type { IUser } from "../Types/typeUsers.d.ts";

import useGetUserList from "../Hook/useGetUserList";

import { ConfirmModal } from "./ConfirmModal.tsx";

import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { Tooltip } from "./Tooltip.tsx";


export default function UserList() {
  // const {isVisible, toggleModal} = useToggleModal();
  // const modalConfirmRef = useRef<HTMLDivElement | null>(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const getUserList = useGetUserList();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserList();
        console.log('userlist data', data);
        setUserList(data);
      } catch (error) {
        console.error("Erreur dans la requête des listes utilisateurs: ", error);
      }
    };

    fetchData();

  },[]);

  const handleDeleteUser = (user: IUser) => {
    setSelectedUser(user);
    setOpenConfirmModal(true);
  };


  useEffect(() => {
    // Ajoute un gestionnaire d'événement de clic global lorsque le composant est monté
    // setIsLoading(false);
    setOpenConfirmModal(false);
    setSelectedUser(undefined);
  }, []);

  return (
      <>
    <div className={"user-list__container"}>
      {!userList || !userList.length ?
      (<h1 className="category-text"> Aucun utilisateur en vue, vous êtes bien seul...</h1>): 
      <h1 className="category-text"> Utilisateurs du chat : </h1> }
          <section className="table-container">
              <div className="table">
                {userList && userList.length > 0 && (
                  <div className="table-header table-row">
                    <div>Identifiant</div>
                    <div>Nom</div>
                    <div>Statut</div>
                    <div>Actions</div>
                  </div>)}

                {userList.map((user) => (
                  <div key={user.id} className="body-row">
                    <div>{user.id}</div>
                    <div>{user.username ? user.username : "Anonyme"}</div>
                    <div>{user.role ? user.role : "Utilisateur"}</div>

                    {user.role !== "admin" &&
                        <div className={"table-row__actions"}>
                            <Tooltip content="Supprimer" direction="top">
                      <IconContext.Provider value={{ color: "#de392a", className: "trash-icon"}}>
                        <div>
                          <button title="delete user" type="button" className="btn-reset" onClick={() => handleDeleteUser(user)}>
                            <RiDeleteBin6Line className={"trash-icon"} />
                          </button>
                        </div>
                      </IconContext.Provider>
                            </Tooltip>
                            <Tooltip content="Modifier" direction="top">
                        <IconContext.Provider value={{ color: "blue", className: "update-icon" }}>
                            <div>
                            <button title="delete user" type="button" className="btn-reset" >
                                <FaUserCog className={"update-icon"} />
                            </button>
                            </div>
                        </IconContext.Provider>
                            </Tooltip>
                        </div>}
                  </div>
                ))}
                  {(openConfirmModal && selectedUser) && (
                      <ConfirmModal
                          userList={userList}
                          setUserList={setUserList}
                          selectedUser={selectedUser}
                          setOpenConfirmModal={setOpenConfirmModal}
                          title={"Supprimer un utilisateur"}
                      />
                  )}
              </div>
          </section>
    </div>
   </>
  );
}

