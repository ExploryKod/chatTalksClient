import ChatRoomPreview from '../Component/ChatRoomPreview';
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useLoggedStore} from "../StateManager/userStore.ts";
import useGetRoomsList from '../Hook/useGetRoomsList.tsx';

export interface ICategory {
    id: number,
    name: string,
    description: string,
}

const ChatPreview: React.FC<{}> = () => {

    const [roomName, setRoomName] = useState('');
    const [roomsList, setRoomsList] = useState<ICategory[]>([]);
    const getRoomsList = useGetRoomsList();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getRoomsList();
          console.log('userlist data', data);
          setRoomsList(data);
        } catch (error) {
          console.error("Erreur dans la requête des listes utilisateurs: ", error);
        }
      };

      fetchData();

    },[]);

    const {token} = useLoggedStore();
    const createRoom = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (roomName !== '') {
            try {
                const response = await fetch('http://localhost:8000/chat/create', {
                    method: 'POST',
                    body: new URLSearchParams({
                        'roomName': roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: 'same-origin'
                });

                if (response.ok) {
                    console.log('room created');
                    const data = await response.json();
                    console.log("room created DATA :",data)
                } else {
                    console.log('échec de la création de room');
                }

            } catch (error) {
                console.error('log failed:', error);
            }
        }else{
            alert('Veuillez donner un nom à votre salle');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomName(e.target.value)
    }

    return (
        <>
          <h1 className="category-title">Créer ou entrez dans une salle pour chatter !</h1>
            <div className="rooms-container">
                <form className="message-form" method={'post'} onSubmit={createRoom}>
                    <input className="input-log" name={'roomName'} type={'text'} placeholder={'Trouvez un nom de salle en un mot'} onChange={handleChange}/>
                    <button className="button-container room-button" type={'submit'}>Créer une salle</button>
                </form>
                <div className="categories-container">
                    <div className={"category-preview-container"} >
                {roomsList?.map((item, index) => (
                    <ChatRoomPreview key={index} name={item.name} id={item.id} description={item.description}/>))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPreview;