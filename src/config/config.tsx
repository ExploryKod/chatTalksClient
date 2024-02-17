interface Config {
  serverPort: string | number;
  serverHost: string;
  serverWsHost: string;
  // Add other configurations if necessary
}

const config:Config = {
    serverPort: 8000,
    // serverHost: 'https://go-chat-docker.onrender.com',
    // serverWsHost:'ws://go-chat-docker.onrender.com'
    serverHost: 'http://localhost:8000',
    serverWsHost:'ws://localhost:8000'
};
  
export default config;

  