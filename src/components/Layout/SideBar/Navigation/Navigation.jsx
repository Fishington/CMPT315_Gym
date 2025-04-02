import {Link, useNavigate} from 'react-router-dom';
import { logout } from '@/redux/actions/authActions';
import {useDispatch} from "react-redux";
import './Navigation.scss';
import './MobileNavigation.scss'

function Navigation({links, currentPage, mobile, onLinkClick }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const isCurrentPage = (linkTitle) => {
        return currentPage === linkTitle || (!currentPage && linkTitle === 'Home');
    };

    return (
        <ul className={mobile ? 'mobile-navigation': 'navigation__links'}>
            {links.map((link, key) => (
                <li key={key}>
                    {link.title === 'Log Out' ? (
                        <button
                            className="navigation__link logout"
                            onClick={handleLogout}
                        >
                            {link.icon}
                            <span className='navigation__link-title'>
                                {link.title}
                            </span>
                        </button>
                    ) : (
                        <Link
                            to={link.href}
                            className={`navigation__link ${isCurrentPage(link.title) ? 'active' : ''}`}
                            onClick={() => {
                                if (onLinkClick) onLinkClick();
                            }}
                        >
                            {link.icon}
                            <span className='navigation__link-title'>
                                {link.title}
                            </span>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;