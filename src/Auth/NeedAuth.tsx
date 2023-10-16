import { Navigate, useLocation } from "react-router-dom";
import type { UserContextProps } from "../Types/typeContext";
import { userContext } from "../Context/createContext";
import { useLoginContext } from "../Hook/useLoginContext";
import { useContext } from "react";

interface NeedAuthProps {
    children: React.ReactNode;
}

export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    // const [loggedUser, setLoggedUser] = useContext<UserContextProps>(userContext);
    // const { loggedUser, setLoggedUser } = useUserContext()
    const { loggedIn, setLoggedIn } = useLoginContext()

    if (loggedIn) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
