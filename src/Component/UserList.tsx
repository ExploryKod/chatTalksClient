import React, { useEffect, useState } from "react";
import useGetUserList from "../Hook/useGetUserList";
import useBackendPing from "../Hook/useBackendPing";
import useDeleteUser from "../Hook/useDeleteUser";

export default function UserList() {
  interface IUser {
    id: number;
    username: string;
  }

  const [userList, setUserList] = useState<IUser[]>([]);
  const getUserList = useGetUserList();
  const backendPing = useBackendPing();
  ;

  const handleDelete = (userId: number) => {
    // Call the delete user hook
    try {
      const data = useDeleteUser(userId);
      console.log('delete userlist data ', data)
    } catch (error) {
      console.error("Erreur dans la requête pour supprimer un utilisateur: ", error);
    }
  }

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

  return (
    <div>
      <h1 className="m-5 text-center">Utilisateurs</h1>
      {userList.map((user, index) => (
        <div key={index} className="w-75 mx-auto mb-3">
          <button className="btn btn-dark w-100" type="button" onClick={() => backendPing(user.id)}>
            {user.username}
          </button>
          <button className="btn btn-danger w-100 mt-2" type="button" onClick={() => handleDelete(user.id)}>
            Delete {user.username}
          </button>
        </div>
      ))}
    </div>
  );
}

