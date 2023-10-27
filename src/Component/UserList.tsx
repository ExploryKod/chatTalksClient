import { useEffect, useState } from "react";
import useGetUserList from "../Hook/useGetUserList";
import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
// import useBackendPing from "../Hook/useBackendPing";
// import {Link} from "react-router-dom";


export default function UserList() {
  interface IUser {
    id: number;
    username: string;
    role: string;
  }



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

  // const handleDelete = (userId: number) => {
  //   fetch(`http://localhost:8000/delete-user/${userId}`, {
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
  //         setUserList(prevUserList => prevUserList.filter(user => user.id !== userId));
  //         console.log('User deleted successfully:', data);
  //       })
  //       .catch(error => {
  //           console.error('Error deleting username:', error);
  //           throw error; // Re-throw the error to propagate it to the calling code
  //       });
  // }

  return (
    <div className={"user-list__container"}>
      {!userList || !userList.length ?
      (<h1 className="category-text"> Aucun utilisateur en vue, vous êtes bien seul...</h1>): 
      <h1 className="category-text"> Utilisateurs du chat : </h1> }
          <section className="table-container">
              <div className="table">
                {userList && userList.length > 0 && (
                  <div className="table-row table-header">
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
                      <IconContext.Provider value={{ color: "red", className: "trash-icon" }}>
                        <div>
                      <RiDeleteBin6Line className={"trash-icon"} /> </div>
                      </IconContext.Provider>}

                  </div>
                ))}
              </div>
          </section>
    </div>
  );
}

