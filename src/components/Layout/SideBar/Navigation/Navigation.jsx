import {Link, useNavigate} from 'react-router-dom';
import './Navigation.scss';

function Navigation({links, currentPage}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <ul className="navigation__links">
            {links.map((link) => (
                <li key={link.href}>
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
                            className={`navigation__link ${currentPage === link.title ? 'active' : ''}`}
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
