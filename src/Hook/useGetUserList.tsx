import config from '../config/config.js';
import { useLoggedStore } from '../StateManager/userStore';

export default function useGetUserList() {

    const serverHost:number | string = config.serverHost;
    const { token } = useLoggedStore();
    return function () {
        return fetch(`${serverHost}/user-list`, {
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