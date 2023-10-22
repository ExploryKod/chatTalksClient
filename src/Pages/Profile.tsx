import React, { useState } from "react";
import useDeleteUser from "../Hook/useDeleteUser";


interface ProfileProps {
    isAdmin: boolean;
    userId: string;
}

const Profile: React.FC<ProfileProps> = ({ isAdmin, userId }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const data = await useDeleteUser(userId);
            console.log('userlist data', data)
            setIsDeleting(false);
        } catch (error) {
            console.error("Erreur dans la requête des listes utilisateurs: ", error);
        }
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
          
        </div>
    );
};

export default Profile;
