interface Config {
  serverPort: string | number;
  serverHost: string;
  serverWsHost: string;
  // Add other configurations if necessary
}

const config:Config = {
    serverPort: 8000,
    serverHost: 'https://go-chat-docker.onrender.com',
    serverWsHost:'wss://go-chat-docker.onrender.com'
};
  
export default config;

  