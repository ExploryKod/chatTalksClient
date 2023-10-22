import config from '../config/config.js';

export default function useGetUserList() {
    const serverPort: number | string = config.serverPort;

    return function () {
        return fetch(`http://localhost:${serverPort}/user-list`, {
            method: 'GET',
            mode: "cors",
            credentials: 'include', // Enverra les httpOnly cookies au backend > là où se trouve mon jwt token (inaccessible directement en front)
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(data => data.json())
    }
}


// export default function useGetUserList() {

//     const serverPort:number | string = config.serverPort;

//     return function () {
//         return fetch(`http://localhost:${serverPort}/user-list`, {
//             method: 'GET',
//             mode: "cors"
//         })
//             .then(data => data.json())
//     }
// }