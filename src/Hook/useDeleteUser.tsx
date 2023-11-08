import config from '../config/config.js';
import { useLoggedStore } from '../StateManager/userStore';
export default function useDeleteUser(id: number | string) {

    const serverPort:number | string = config.serverPort;
    const { token } = useLoggedStore();

    return function () {
        return fetch(`http://localhost:${serverPort}/delete-user/${id.toString()}`, {
            method: 'GET',
            mode: "cors",
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}