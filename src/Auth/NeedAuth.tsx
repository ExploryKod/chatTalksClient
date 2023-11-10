import { Navigate, useLocation } from "react-router-dom";
import { useLoggedStore } from '../StateManager/userStore';
import React from "react";

interface NeedAuthProps {
    children: React.ReactNode;
}

const token = localStorage.getItem('token');
const username = localStorage.getItem('username');
if (token) {
    useLoggedStore.setState({ token: token });
}
if(username) {
    useLoggedStore.setState({ username: username });
}
export default function NeedAuth(props: NeedAuthProps): React.ReactElement {
    const location = useLocation();
    const { token, username } = useLoggedStore();

    if (token && username) {
        return <>{props.children}</>;
    } else {
        return <Navigate to="/connexion" state={{ from: location }} />;
    }
}
