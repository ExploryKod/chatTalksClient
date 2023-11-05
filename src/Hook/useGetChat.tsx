// import config from '../config/config.js';

export default function useGetChat() {

    // const serverPort:number | string = config.serverPort;

    return function () {
        return fetch(`http://localhost:8000/chat`, {
            method: 'GET',
            mode: "cors"
        })
            .then(data => data.json())
    }
}