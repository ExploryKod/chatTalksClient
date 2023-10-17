import config from '../config/config.js';

export default function useGetUserList() {

    const serverPort:number | string = config.serverPort;

    return function () {
        return fetch(`http://localhost:${serverPort}/user-list`, {
            method: 'GET',
            mode: "cors"
        })
            .then(data => data.json())
    }
}