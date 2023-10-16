import { useState} from "react";
import { userContext } from "./createContext";
import type { UserProviderProps, IUser } from "../Types/typeContext.d.ts";

export default function UserProvider({ children }: UserProviderProps): React.ReactElement {
    // const [user, setUser] = useState();
    const [user, setUser] = useState<IUser[]>([]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
}
