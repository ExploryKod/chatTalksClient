import ChatRoomCard from '../Component/ChatRoomCard';
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLoggedStore} from "../StateManager/userStore.ts";
import useGetRoomsList from '../Hook/useGetRoomsList.tsx';
import useFlashMessage from "../Hook/useFlashMessage.tsx";
import type { IRoom }  from "../Types/typeRooms.d.ts";

export interface IWordLength {
    num: number,
    max: number,
    text: string,
    endMessage: string
}

const ChatRoomsPreview = () => {
    // Hooks
    const navigate = useNavigate();
    const {token} = useLoggedStore();
    const getRoomsList = useGetRoomsList();
    const { setFlashMessage, flashMessage, opacityMessage} = useFlashMessage('');

    // UseStates
    const [roomName, setRoomName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [roomsList, setRoomsList] = useState<IRoom[]>([]);
    const [wordLength, setwordLength] = useState<IWordLength>({num: 0, max: 0, text: '', endMessage:""});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getRoomsList();
          console.log('roomlist data', data);
          setRoomsList(data);
        } catch (error) {
          console.error("Erreur dans la requête des listes utilisateurs: ", error);
        }
      };

      fetchData();

    },[]);

    useEffect(() => {
        if(roomsList && roomsList.length >= 6) {
            setFlashMessage({alert: 'Nombre maximal de salle atteinte', name: 'alert'});
        }

    }, [roomsList]);


    const createRoom = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (roomName !== '' && description !== '') {
            try {
                const response = await fetch('http://localhost:8000/chat/create', {
                    method: 'POST',
                    body: new URLSearchParams({
                        'roomName': roomName,
                        'description': description,
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
                    console.log("data",data)
                    if(data.id && data.name && data.description) {
                        const newRoom ={id: data.id, name: data.name, description: data.description} as IRoom;
                        setRoomsList([...roomsList, newRoom]);
                    } else {
                        setFlashMessage({alert:'échec de l\'affichage des rooms: réponse incomplète du serveur', name: 'alert'});
                        console.error("Le serveur n'a pas donné la bonne structure de type IRoom en retour")
                        setTimeout(() => {
                            navigate('/chat')
                        }, 2000);
                    }
                } else {
                    console.log('échec de la création de room');
                }

            } catch (error) {
                console.error('log failed:', error);
            }
        }else{
            setFlashMessage({alert: 'Veuillez donner un nom et une description à votre salle', name: 'alert'});


        }
    };

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setwordLength({num: 0, max: 0, text: "", endMessage: ""})
        if (e.target.value.length < 31) {
            setRoomName(e.target.value)
        }
        if (e.target.value.length > 1 && e.target.value.length < 30) {
            setwordLength({num: e.target.value.length, max: 30, text: "Nom, caractères: ", endMessage: ""})
            return
        }
        if (e.target.value.length === 30) {
            setwordLength({num: 30, max: 30, text: "Nom, caractères: ", endMessage: "Maximum atteint"})
            return
        }
    }

    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setwordLength({num: 0, max: 0, text: "", endMessage: ""})
        if (e.target.value.length < 51) {
            setDescription(e.target.value)
        }
        if(e.target.value.length > 1 && e.target.value.length < 50) {
            setwordLength({num: e.target.value.length, max: 50, text: "Thème: ", endMessage: ""})
            return
        }
        if(e.target.value.length === 50) {
            setwordLength({num: 50, max: 50, text: "Thème, caratères: ", endMessage: "Maximum atteint"})
            return
        }
    }

    return (
        <>
          <h1 className="category-title">Créer ou entrez dans une salle pour chatter !</h1>
            {flashMessage.alert !== "" && <div className={`${opacityMessage} output-message text-lightLavender bgd-darkBlue padding-5 border-radius-5`}>{flashMessage.alert}</div>}
            <div className="rooms-container">
                {roomsList && roomsList.length >= 6 ? (<div>
                    <h2 className="category-title">Choisissez une des 6 salles : </h2>
                    {flashMessage.alert != "" && (<p className={`category-text text-darkpink ${opacityMessage}`}>{flashMessage.alert}</p>)}
                </div>) : (<form className="message-form" method={'post'} onSubmit={createRoom}>
                    <div className="container-20 flex-center-childs-column">
                        <p className={`opacity-transition ${wordLength.num ? "opacity-100" : "opacity-0"} ${wordLength.endMessage != "" ? "text-success" : "text-red"} padding-y-5`}>
                            {wordLength.max && wordLength.endMessage === "" ? wordLength.text+wordLength.num+"/"+wordLength.max : wordLength.endMessage}
                        </p>
                    </div>

                    <input maxLength={30} className="input-log margin-bottom-20" name={'roomName'} type={'text'} placeholder={'Trouvez un nom de salle en un mot'} onChange={handleChangeName}/>
                    <input maxLength={50} className="input-log" name={'description'} type={'text'} placeholder={'Ecrivez un thème de la salle'} onChange={handleChangeDescription}/>
                    <button className="button-container room-button" type={'submit'}>Créer une salle</button>
                </form>) }
                <div className="categories-container">
                    <div className={"category-preview-container"} >
                {roomsList?.map((item, index) => (
                    <ChatRoomCard key={index} name={item.name} id={item.id} description={item.description}/>))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatRoomsPreview;