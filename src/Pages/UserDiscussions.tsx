import {useEffect, useState} from "react";
import config from "../config/config.tsx";
import {useLoggedStore} from "../StateManager/userStore.ts";
import {IUserDiscussion} from "../Types/typeRooms";

const UserDiscussions = () => {

    const [discussions, setDiscussions] = useState<IUserDiscussion[]>([]);
    const serverHost = config.serverHost;
    const {userId, token} = useLoggedStore();

    useEffect(() => {
        fetch(`${serverHost}/user/discussions/${userId}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDiscussions([...data]);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    console.log("DISCUSS", discussions)
    return (
        // <div className="main-container">
        //     <h1>User Discussions</h1>
        //     <ul>
        //         {discussions.map((discussion: any) => (
        //             <li key={discussion.id}>
        //                 <h2>{discussion.room.name}</h2>
        //                 <p>{discussion.last_message.content}</p>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className="main-container">
            <h1 style={{marginLeft: "15px"}}>User Discussions</h1>
            <ul className="discussion-list">
                {discussions.map((discussion: any) => (
                    <li className="discussion-item" key={discussion.id}>
                        <div className="discussion-info">
                            <h2 className="discussion-name">{discussion.room.name}</h2>
                            <p className="last-message">
                                {discussion.last_message.username && (
                                    <span style={{fontWeight: "bold"}}>
                                        {discussion.last_message.username}:{" "}
                                    </span>
                                )}
                                {discussion.last_message.content ? discussion.last_message.content : "Discussion vide, envoyez un msg en premier !"}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserDiscussions;