import { createContext } from "react";
import { UserContextProps } from "../Types/typeContext";

export const userContext = createContext<UserContextProps>({
    user: [],
    setUser: () => {},
});