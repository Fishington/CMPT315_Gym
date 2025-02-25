import NotificationIcon from '@/components/Icons/NotificationIcon';

import './HeaderProfile.scss'
import {useAuth} from '@/context/AuthContext.jsx';
import {Link} from 'react-router-dom';

function HeaderProfile() {

    return (
        <div className="header-profile">
            <button className="header-profile__notification">
                <NotificationIcon/>
                <p className="header-profile__notification-number">22</p>
            </button>

            <HeaderProfileUser/>

        </div>
    );
}

const HeaderProfileUser = () => {
    const {user} = useAuth();

    return (
        <div className="header-profile__user">
            <img
                className="header-profile__image"
                src={`/images/${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}.jpg`}
                alt={`Profile Image of ${user.firstName} ${user.lastName}`}
            />

            <div className="header-profile__text">
                <h2 className="header-profile__name">{user.firstName} {user.lastName}</h2>

                <Link to="/user-profile" className="header-profile__edit">View Profile</Link>
            </div>
        </div>
    )
}

export default HeaderProfile;