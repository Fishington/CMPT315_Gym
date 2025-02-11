import {Link, useNavigate} from 'react-router-dom';
import './Navigation.scss';
import {useAuth} from '@/context/AuthContext.jsx';

function Navigation({links, currentPage}) {
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout()
        navigate('/login');
    };

    const isCurrentPage = (linkTitle) => {
        return currentPage === linkTitle || (!currentPage && linkTitle === 'Home');
    };

    return (
        <ul className="navigation__links">
            {links.map((link, key) => (
                <li key={key}>
                    {link.title === 'Log Out' ? (
                        <button
                            className="navigation__link logout"
                            onClick={handleLogout}
                        >
                            {link.icon}
                            {link.title}
                        </button>
                    ) : (
                        <Link
                            to={link.href}
                            className={`navigation__link ${isCurrentPage(link.title) ? 'active' : ''}`}
                        >
                            {link.icon}
                            {link.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Navigation;
