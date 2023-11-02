import type { IProfileModal } from "./UserList.tsx";


export const ModalInfoUser = ({setToggle, profile}: IProfileModal) => {

    return (
        <div className="modal">
            <div className="modal-content">

                <div className="modal-header">
                    <h2>Profile de {profile.username}</h2>
                    <span className="close" onClick={() => {setToggle(false)}}>&times;</span>
                </div>
                <div className="modal-body medium">
                    <p>{profile.description}</p>
                    <ul>
                        {profile.hobbies.map((hobbie) => (
                            <li key={hobbie.id}>{hobbie.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <h3>Footer</h3>
                </div>
            </div>
        </div>
    )
}
