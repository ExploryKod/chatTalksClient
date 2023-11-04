import {useEffect, useState, useRef} from "react";

import type { IUser } from "../Types/typeUsers.d.ts";

import useGetUserList from "../Hook/useGetUserList";
import useToggleModal from "../Hook/useToggleModal.tsx";

import { UpdateUserModal } from "./UpdateUserModal.tsx";
import { ConfirmModal } from "./ConfirmModal.tsx";

import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import { Tooltip } from "./Tooltip.tsx";





export default function UserList() {
  const [flashMessage, setFlashMessage] = useState('');
  const {isVisible, toggleModal} = useToggleModal();
  const modalConfirmRef = useRef<HTMLDivElement | null>(null);
  const buttonDeleteUserRef = useRef<HTMLButtonElement | null>(null);
  const buttonUpdateUserRef = useRef<HTMLButtonElement | null>(null);

  const [userList, setUserList] = useState<IUser[]>([]);
  const getUserList = useGetUserList();
  // const backendPing = useBackendPing();
  // const isAdmin = true;
  //
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

  const [selectedUser, setSelectedUser] = useState<IUser>();

  const openModal = (user: IUser) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(undefined);
  };

  const handleDelete = () => {
    // Ici, tu peux gérer la suppression de l'utilisateur, par exemple, en faisant une requête API
    console.log(`Supprimer l'utilisateur avec l'ID : ${selectedUser?.id}`);
    // Ensuite, tu peux fermer la modale
    closeModal();
  };



    // const updateUser = (id: string) => {
    //     fetch(`http://localhost:8000/update-user/${id}`, {
    //         method: "DELETE",
    //     })
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             toggleModal()
    //             setUserList(values => {
    //                 return values.filter(item => item.id.toString() !== id)
    //             })
    //             setFlashMessage(data.message);
    //             setTimeout(() => {
    //                 setFlashMessage('');
    //             }, 3000);

    //         })
    //         .catch(error => {
    //             console.error('Il y a une erreur dans la requête de suppression:', error);
    //             throw error;
    //         });
    // }

  return (
      <>
          {flashMessage && <div className="output-message">{flashMessage}
     </div>}
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
                          <button title="delete user" type="button" className="btn-reset" onClick={() => openModal(user)}>
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
                                {/* <UpdateUserModal isVisible={isVisible} hideModal={toggleModal} user={user} updateUser={updateUser} /> */}
                            </div>
                        </IconContext.Provider>
                            </Tooltip>
                        </div>}
                  </div>
                ))}
                  {selectedUser && (
                    <ConfirmModal 
                    setUserList={setUserList} 
                    modalConfirmRef={modalConfirmRef} 
                    isVisible={isVisible} 
                    hideModal={toggleModal} 
                    onDelete={handleDelete}
                    onClose={closeModal}
                    user={userList.find((user) => user === selectedUser)} 
                    title={""} />
      
      )}

              </div>
          </section>
    </div>
   </>
  );
}

