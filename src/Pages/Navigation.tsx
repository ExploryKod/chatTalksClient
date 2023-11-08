import { Fragment } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useLoggedStore } from '../StateManager/userStore';


const Navigation = () => {

    const navigate = useNavigate();

    const { removeToken } = useLoggedStore();


    const handleLogout = () => {
        removeToken();
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
