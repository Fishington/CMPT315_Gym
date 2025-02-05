import NotificationIcon from '@/components/Icons/NotificationIcon';

import './HeaderProfile.scss'

function HeaderProfile({user}) {
    return (
        <div className="header-profile">
            <button className="header-profile__notification">
                <NotificationIcon/>
                <p className="header-profile__notification-number">22</p>
            </button>

            <div className="header-profile__user">
                <img
                    className="header-profile__image"
                    src={`/images/${user.firstName.toLowerCase()}-${user.lastName.toLowerCase()}.jpg`}
                    alt={`Profile Image of ${user.firstName} ${user.lastName}`}
                />

                <div className="header-profile__text">
                    <h2 className="header-profile__name">{user.firstName} {user.lastName}</h2>
                    <a href='#' className="header-profile__edit">Edit Profile</a>
                </div>
            </div>
        </div>
    );
}

export default HeaderProfile;