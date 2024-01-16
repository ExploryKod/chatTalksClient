interface Config {
  serverPort: string | number;
  serverHost: string;
  serverWsHost: string;
  // Add other configurations if necessary
}

const config:Config = {
    serverPort: 8000,
    serverHost: import.meta.env.VITE_SITE_URL,
    serverWsHost:'wss://go-chat-docker.onrender.com"'
};
  
export default config;

  