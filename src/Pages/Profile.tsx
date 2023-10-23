import UserList from "../Component/UserList";


const Profile = () => {
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
            <h1 className="category-title">Bienvenue !</h1>
    
            <UserList />
          
        </div>
    );
};

export default Profile;
