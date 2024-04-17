import {Fragment } from 'react';
import {Outlet, Link, useNavigate, useLocation} from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';
import useFlashMessage from '../Hook/useFlashMessage';
import { LogOut } from 'lucide-react';

const Navigation = () => {

    const navigate = useNavigate();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage('');
    const { removeToken, removeUsername, removeAdminStatus, admin } = useLoggedStore();
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});
    const avatarImg :string = "https://picsum.photos/id/1011/500/500"
    const location  = useLocation();
    const handleLogout = () => {
        removeToken();
        removeUsername();
        removeAdminStatus();
        toastMessage('Vous êtes bien déconnecté', toastOptionsSuccess);
        // Redirect to the login page or any other desired page after logout
        navigate('/');
    };

    return (
        <Fragment>
            <div className='navigation --vertical --justify-between padding-top-30'>
                <div className='nav-links-container --vertical first-nav'>
                    <div className="nav-link avatar">
                        <div className="avatar-container margin-bottom-30">
                            <img className="avatar-container__image" src={avatarImg} alt="avatar"/>
                        </div>
                    </div>
                </div>
                <div className='nav-links-container --vertical second-nav'>
                    <Link style={location.pathname === "/" ? {color: "salmon"}: {}} className='nav-link board' to='/'>
                        Board
                    </Link>
                    <Link style={location.pathname === "/user-discussions" ? {color: "salmon"}: {}} to={"/user-discussions"} className="nav-link user-discussions">
                        Mes Discussions
                    </Link>
                    <Link style={location.pathname === "/chat" ? {color: "salmon"}: {}} className='nav-link salon' to='/chat'>
                        Salon
                    </Link>
                    {admin !== "1" && (
                        <Link className="nav-link admin" to={"/become-admin"}>Devenir Administrateur</Link>
                    )}
                </div>
                <div className='nav-links-container --vertical last-nav'>
                    <button className='nav-link exit-btn' onClick={handleLogout}>
                        <span>Se déconnecter</span>
                        <span className="exit-btn__icon"><LogOut  size={24} /></span>
                    </button>
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;
