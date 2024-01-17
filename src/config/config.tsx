interface Config {
  serverPort: string | number;
  serverHost: string;
  serverWsHost: string;
  // Add other configurations if necessary
}

const config:Config = {
    serverPort: 8000,
    serverHost: import.meta.env.VITE_SITE_URL_HTTP,
    serverWsHost:import.meta.env.VITE_SITE_URL_WS
};
  
export default config;

  