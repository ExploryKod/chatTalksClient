import { useEffect, useState, Dispatch, SetStateAction } from "react";
import useGetUserList from "../Hook/useGetUserList";
import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";
import useToggleModal from "../Hook/useToggleModal.tsx";
import { UpdateUserModal } from "./UpdateUserModal.tsx";

import { ConfirmModal } from "./ConfirmModal.tsx";
// import useBackendPing from "../Hook/useBackendPing";
// import {Link} from "react-router-dom";

export interface IUser {
    id: number;
    username: string;
    role: string;
}

export interface IProfile extends IUser {
    description: string;
    hobbies: Ihobbies[];
}

export interface Ihobbies {
    id: number;
    name: string;
}

export interface IProfileModal {
    profile: IProfile;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface IConfirmModal {
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    deleteUser: (id: string) => void;
}

export interface IUpdateModal {
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    updateUser: (id: string) => void;
}

const PROFILE: IProfile = {
    id: 1,
    username: "test",
    role: "admin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae ali",
    hobbies: [
        {
            id: 1,
            name: "sport"
        },
        {
            id: 1,
            name: "sport"
        }
    ],
}



export default function UserList() {
  const [flashMessage, setFlashMessage] = useState('');
  const {isVisible, toggleModal} = useToggleModal();

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

  const deleteUser = (id: string) => {
    fetch(`http://localhost:8000/delete-user/${id}`, {
      method: "DELETE",
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            toggleModal()
          setUserList(values => {
            return values.filter(item => item.id.toString() !== id)
          })
            setFlashMessage(data.message);
            setTimeout(() => {
                setFlashMessage('');
            }, 3000);

        })
        .catch(error => {
                console.error('Il y a une erreur dans la requête de suppression:', error);
                throw error;
        });
  }

    const updateUser = (id: string) => {
        fetch(`http://localhost:8000/update-user/${id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                toggleModal()
                setUserList(values => {
                    return values.filter(item => item.id.toString() !== id)
                })
                setFlashMessage(data.message);
                setTimeout(() => {
                    setFlashMessage('');
                }, 3000);

            })
            .catch(error => {
                console.error('Il y a une erreur dans la requête de suppression:', error);
                throw error;
            });
    }

  // const handleDelete = (userId: string) => {
  //   fetch(`http://localhost:8000/delete-user?user=${userId}`, {
  //           method: 'GET',
  //           mode: "cors"
  //       })
  //       .then(response => {
  //           if (!response.ok) {
  //               throw new Error(`HTTP error! Status: ${response.status}`);
  //           }
  //           return response.json();
  //
  //       })
  //       .then(data => {
  //         setUserList(prevUserList => prevUserList.filter(user => user.id.toString() !== userId));
  //         console.log('User deleted successfully:', data);
  //       })
  //       .catch(error => {
  //           console.error('Error deleting username:', error);
  //           throw error; // Re-throw the error to propagate it to the calling code
  //       });
  //
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
                      <IconContext.Provider value={{ color: "red", className: "trash-icon"}}>
                        <div>
                      <RiDeleteBin6Line className={"trash-icon"} onClick={toggleModal} />
                            <ConfirmModal isVisible={isVisible} hideModal={toggleModal} user={user} deleteUser={deleteUser} />
                        </div>
                      </IconContext.Provider>

                        <IconContext.Provider value={{ color: "blue", className: "update-icon" }}>
                            <div>
                                <FaUserCog className={"update-icon"} />
                                <UpdateUserModal isVisible={isVisible} hideModal={toggleModal} user={user} deleteUser={deleteUser} />
                            </div>
                        </IconContext.Provider>
                        </div>}
                  </div>
                ))}

              </div>
          </section>
    </div>
   </>
  );
}

