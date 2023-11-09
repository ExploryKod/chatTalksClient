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

    return (
        <div>
            <h1 className="category-title">Bienvenue {username} !</h1>
                <UserList />
                <RoomList />
        </div>
    );
};

export default Profile;
