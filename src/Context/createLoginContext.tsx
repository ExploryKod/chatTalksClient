import React, { useState } from "react";
import { LoginContext } from "./loginContext";
interface LoginProviderProps {
  children: React.ReactNode
}

export const LoginProvider = ({ children }: LoginProviderProps) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};