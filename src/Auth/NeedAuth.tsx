import { Navigate, useLocation } from "react-router-dom";
import { useLoginContext } from "../Hook/useLoginContext";

interface NeedAuthProps {
    children: React.ReactNode;
}

export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    // const [loggedUser, setLoggedUser] = useContext<UserContextProps>(userContext);
    // const { loggedUser, setLoggedUser } = useUserContext()
    const { loggedIn } = useLoginContext()

    if (loggedIn) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
