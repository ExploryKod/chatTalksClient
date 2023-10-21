// import data from "bootstrap/js/src/dom/data";

export default function useGetJWT() {

    return function (username: string, password:string) {
        const credentials = btoa(`${username}:${password}`);

        return fetch('http://localhost:8000/login', {
            method: 'GET',
            credentials: "include",
            mode: "cors",
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
            .then(data => data.json())
    }
}