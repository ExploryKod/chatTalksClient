import { Navigate, useLocation } from "react-router-dom";
import { useLoggedStore } from '../StateManager/userStore';
import React from "react";

interface NeedAuthProps {
    children: React.ReactNode;
}

export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    const { token } = useLoggedStore();

    
    if (token) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
