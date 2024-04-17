import {useEffect, useState} from "react";
import config from "../config/config.tsx";
import {useLoggedStore} from "../StateManager/userStore.ts";
import {IUserDiscussion} from "../Types/typeRooms";
import {Link} from "react-router-dom";

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

    const handleClick = async (roomId: number) => {
        await fetch(`${serverHost}/user/discussion/delete/${userId}/${roomId}`, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const newDiscussion = discussions.filter(
            discussion => discussion.room.id !== roomId,
        );
        setDiscussions(newDiscussion);
    }

    return (
        <div className="main-container">
            <h1 style={{marginLeft: "15px"}}>Mes Discussions</h1>
            <ul className="discussion-list">
                {discussions.length > 0 ? discussions.map((discussion: any) => (
                        <li className="discussion-item" key={discussion.id}>
                            <div className="discussion-info">
                                <Link to={{
                                    pathname: `/chat/${discussion.room.id.toString()}`,
                                    search: `?id=${discussion.room.id.toString()}&name=${discussion.room.name}&description=${discussion.room.description}`,
                                }}>
                                    <h2 className="discussion-name">{discussion.room.name}</h2>
                                    <p className="last-message">
                                        {discussion.last_message.username && (
                                            <span style={{fontWeight: "bold"}}>
                                        {discussion.last_message.username}:{" "}
                                    </span>
                                        )}
                                        {discussion.last_message.content ? discussion.last_message.content : "Discussion vide, envoyez un msg en premier !"}
                                    </p>
                                    <span className="last-message-date">{discussion.last_message.created_at}</span>
                                </Link>
                                <button onClick={() => handleClick(discussion.room.id)} style={{color: "purple"}}
                                        className={"delete-button"}>X
                                </button>
                            </div>
                        </li>
                    ))
                    :
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "10px", paddingRight: "10px", marginTop: "50px"}}>
                        <div style={{
                            background: "pink",
                            borderRadius: "5px",
                            height: "200px",
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "solid 2px salmon"
                        }}>
                            <h2 style={{ color: "salmon"}}>Vous n'avez pas encore de discussion</h2>
                        </div>
                    </div>
                }
            </ul>
        </div>
    );
}

export default UserDiscussions;