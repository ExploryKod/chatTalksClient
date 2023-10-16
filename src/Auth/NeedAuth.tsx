import { Navigate, useLocation } from "react-router-dom";

interface NeedAuthProps {
    children: React.ReactNode;
}

export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    const loggedIn = false;

    if (loggedIn) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
