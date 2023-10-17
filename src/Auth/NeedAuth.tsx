import { Navigate, useLocation } from "react-router-dom";
import { useLoggedStore } from '../StateManager/userStore';

interface NeedAuthProps {
    children: React.ReactNode;
}

export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    const { logged } = useLoggedStore();
    
    if (logged) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
