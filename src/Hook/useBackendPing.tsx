import config from "../config/config";

interface PingResponse {
    message: string;
    // Add other properties if necessary
}

export default function useBackendPing() {
    const serverPort = config.serverPort;

    return function (userId: number): Promise<string> {
        return fetch(`http://localhost:${serverPort}/ping/${userId}`, {
            method: 'POST',
        })
            .then(response => response.json() as Promise<PingResponse>)
            .then(data => data.message);
    };
}
