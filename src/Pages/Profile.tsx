import UserList from "../Component/UserList";
import { useLoggedStore } from '../StateManager/userStore';
import RoomList from "../Component/RoomList.tsx";

const Profile = () => {
    const { username } = useLoggedStore();

    return (
        <div>
            <h1 className="category-title margin-bottom-10">Bienvenue {username} !</h1>

            <div>
                <UserList />
                <RoomList />
            </div>

        </div>
    );
};

export default Profile;
