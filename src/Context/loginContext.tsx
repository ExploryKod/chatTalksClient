import { createContext } from 'react';

const LoginContext = createContext({ loggedIn: false, setLoggedIn: (loggedIn: boolean) => { } });

export { LoginContext };