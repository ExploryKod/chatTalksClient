import {useEffect, useState } from "react";

import type { IUser } from "../Types/typeUsers.d.ts";

import useGetUserList from "../Hook/useGetUserList";

import { ConfirmModal } from "./ConfirmModal.tsx";

import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { HiMiniBellAlert } from "react-icons/hi2";
import { Tooltip } from "./Tooltip.tsx";
import {UpdateUserModal} from "./UpdateUserModal.tsx";
import useFlashMessage from "../Hook/useFlashMessage.tsx";


export default function UserList() {
  // const modalConfirmRef = useRef<HTMLDivElement | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  const { toastMessage, createDefaultToastOptions } = useFlashMessage("");
  const toastOptionsInfo = createDefaultToastOptions({type: 'info', position: 'top-center', autoClose: 3000});
  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
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

    fetchData().then(r => console.log('retour promesse: ', r));

  },[]);

  const handleDeleteUser = (user: IUser) => {
    setSelectedUser(user);
    setOpenConfirmModal(true);
  };

  const handleUpdateUser = (user: IUser) => {
    setSelectedUser(user);
    setOpenUpdateModal(true);
  };

  const handleAlertAdmin = (user: IUser) => {
    setSelectedUser(user);
    toastMessage("Vous ne pouvez pas encore alerter un administrateur, Nous travaillons sur cette fonctionnalité", toastOptionsInfo);
  };


  useEffect(() => {
    // Ajoute un gestionnaire d'événement de clic global lorsque le composant est monté
    // setIsLoading(false);
    setOpenConfirmModal(false);
    setOpenUpdateModal(false);
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
                    <div>{user.admin === 1 ? "Administrateur" : "Utilisateur"}</div>

                    {user.admin === 1 ? (
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
                            <button title="delete user" type="button" className="btn-reset" onClick={() => handleUpdateUser(user)} >
                                <FaUserCog className={"update-icon"} />
                            </button>
                            </div>
                        </IconContext.Provider>
                            </Tooltip>
                        </div>): (
                        <div className={"table-row__actions"}>
                            <Tooltip content="Signaler" direction="top">
                        <IconContext.Provider value={{ color: "#de392a", className: "trash-icon"}}>
                            <div>
                                <button title="delete user" type="button" className="btn-reset" onClick={() => handleAlertAdmin(user)}>
                                    <HiMiniBellAlert className={"trash-icon"} />
                                </button>
                            </div>
                        </IconContext.Provider>
                            </Tooltip>
                        </div>)}
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
                {(openUpdateModal && selectedUser) &&
                    (<UpdateUserModal
                    userList={userList}
                    setUserList={setUserList}
                    selectedUser={selectedUser}
                    setOpenUpdateModal={setOpenUpdateModal}
                    title={"Modifier un utilisateur"}
                    />
                )}
              </div>
          </section>
    </div>
   </>
  );
}

