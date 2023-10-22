import config from '../config/config.js';

export default function useDeleteUser(id: number | string) {

    const serverPort:number | string = config.serverPort;

    return function () {
        return fetch(`http://localhost:${serverPort}/delete-user/${id}`, {
            method: 'GET',
            mode: "cors"
        })
            .then(data => data.json())
    }
}