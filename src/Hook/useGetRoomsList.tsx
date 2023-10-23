import config from '../config/config.js';
import { useLoggedStore } from '../StateManager/userStore';

export default function userRoomsList() {
  
    const serverPort:number | string = config.serverPort;
    const { token } = useLoggedStore();
    return function () {
        return fetch(`http://localhost:${serverPort}/chat/rooms`, {
            method: 'GET',
            mode: "cors",
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(data => data.json())
    }
}