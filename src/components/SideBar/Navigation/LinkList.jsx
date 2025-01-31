import './Navigation.scss'

function LinkList({links, currentPage}) {
    return (
            <ul className="navigation__links">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={`navigation__link 
                                ${currentPage === link.title && 'active'}
                                ${'Log Out' === link.title && 'logout'}
                            `}
                        >
                            {link.icon}
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
    );
}

export default LinkList;