import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation'>
            
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        ACCUEIL
                    </Link>
                    <Link className='nav-link' to='/chat'>
                        CHAT ROOMS
                    </Link>
                </div>
            </div>

            <Outlet />

        </Fragment>
    )
}

export default Navigation;
