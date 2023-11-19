import {Fragment } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';
import useFlashMessage from '../Hook/useFlashMessage';

const Navigation = () => {

    const navigate = useNavigate();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage('');
    const { removeToken, removeUsername, removeAdminStatus, admin } = useLoggedStore();
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});
    const avatarImg :string = "https://picsum.photos/id/1011/500/500"

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

                <div className='nav-links-container --vertical'>
                    <div className="nav-link">
                        <div className="avatar-container margin-bottom-30">
                            <img className="avatar-container__image" src={avatarImg} alt="avatar"/>
                        </div>
                    </div>

                    <Link className='nav-link' to='/'>
                        Board
                    </Link>
                    <Link className='nav-link' to='/chat'>
                        Salon
                    </Link>
                    {admin !== "1" && (
                        <Link className="nav-link" to={"/become-admin"}>Devenir Adminstrateur</Link>
                    )}
                </div>
                <div className='nav-links-container --vertical'>
                    <button className='nav-link' onClick={handleLogout}>
                        Se déconnecter
                    </button>
                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;
