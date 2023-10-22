import config from '../config/config.js';

type userId = number | string;

export default function useDeleteUser(id:userId) {

    const serverPort:number | string = config.serverPort;

    return function () {
        return fetch(`http://localhost:${serverPort}/user-list?=${id}`, {
            method: 'GET',
            mode: "cors"
        })
            .then(data => data.json())
    }
}