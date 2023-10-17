import config from '../config/config.js';

export default function useGetJWT(username:string, password:string) {

    const serverPort = config.serverPort;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return function (username:string, password:string) {
        const credentials = btoa(`${username}:${password}`);

        return fetch(`http://localhost:${serverPort}/login`, {
            method: 'POST',
            credentials: "include",
            mode: "cors",
            body: formData, 
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
            .then(data => data.json())
    }
}