import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './HeaderProfile.scss'

function HeaderProfile() {

    return (
        <div className="header-profile">
            <HeaderProfileUser/>
        </div>
    );
}

const HeaderProfileUser = () => {
    const user = useSelector((state) => state.auth.user);

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