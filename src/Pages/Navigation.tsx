import { Fragment } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';
import useFlashMessage from '../Hook/useFlashMessage';


const Navigation = () => {

    const navigate = useNavigate();
    const { toastMessage, createDefaultToastOptions } = useFlashMessage('');
    const { removeToken, removeUsername, removeAdminStatus } = useLoggedStore();
    const toastOptionsSuccess = createDefaultToastOptions({type: 'success', position: 'top-center', autoClose: 3000});


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
            <div className='navigation'>
            
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        BOARD
                    </Link>
                    <Link className='nav-link' to='/chat'>
                        SALONS
                    </Link>
                    <button className='nav-link' onClick={handleLogout}>
                        LOGOUT
                    </button>
                </div>
            </div>

            <Outlet />

        </Fragment>
    )
}

export default Navigation;
