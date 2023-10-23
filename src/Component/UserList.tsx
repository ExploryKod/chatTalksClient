import { useEffect, useState } from "react";
import useGetUserList from "../Hook/useGetUserList";
import useBackendPing from "../Hook/useBackendPing";


export default function UserList() {
  interface IUser {
    id: number;
    username: string;
  }

  const [userList, setUserList] = useState<IUser[]>([]);
  const getUserList = useGetUserList();
  const backendPing = useBackendPing();
  const isAdmin = true;
  
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

  const handleDelete = (userId: number) => {
    fetch(`http://localhost:8000/delete-user/${userId}`, {
            method: 'GET',
            mode: "cors"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
            
        })
        .then(data => {
          setUserList(prevUserList => prevUserList.filter(user => user.id !== userId));
          console.log('User deleted successfully:', data);
        })
        .catch(error => {
            console.error('Error deleting user:', error);
            throw error; // Re-throw the error to propagate it to the calling code
        });
  }

  return (
    <div>
      <h1 className="m-5 text-center"> Utilisateurs du chat : </h1>
      {userList.map((user, index) => (
        <div key={index} className="w-75 mx-auto mb-3">
          <button className="btn btn-dark w-100" type="button" onClick={() => backendPing(user.id)}>
            {user.username}
          </button>
          {isAdmin &&
          <button className="btn btn-danger w-100 mt-2" type="button" onClick={() => handleDelete(user.id)}>
            Delete {user.username}
          </button>}
        </div>
      ))}
    </div>
  );
}

