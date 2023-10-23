import config from '../config/config.js';

export default function userRoomsList() {
  
    const serverPort:number | string = config.serverPort;
    const { logged } = useLoggedStore();
    return function () {
        return fetch(`http://localhost:${serverPort}/chat/rooms`, {
            method: 'GET',
            mode: "cors",
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(data => data.json())
    }
}