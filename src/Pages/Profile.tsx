import UserList from "../Component/UserList";
import { useLoggedStore } from '../StateManager/userStore';
import RoomList from "../Component/RoomList.tsx";
interface ProfileProps {
    isAdmin: boolean;
    username: string;
    userId: string;
}

const Profile: React.FC<ProfileProps> = () => {
    const { username } = useLoggedStore();
    // const [isDeleting, setIsDeleting] = useState(false);


    // const handleDelete = async () => {
    //     setIsDeleting(true);
    //     try {
    //         const data = await useDeleteUser(userId);
    //         console.log('userlist data', data)
    //         setIsDeleting(false);
    //     } catch (error) {
    //         console.error("Erreur dans la requête des listes utilisateurs: ", error);
    //     }
    // };



    return (
        <div>
            <h1 className="category-title">Bienvenue {username} !</h1>
                <UserList />
                <RoomList />
        </div>
    );
};

export default Profile;
