import {useState} from "react";
import {mainLinks, subLinks} from './sideBarLinks.jsx';
import LogoFullIcon from '@/components/Icons/LogoFullIcon';
import Navigation from './Navigation';
import hamburgerMenu from '@/assets/images/icon-hamburger.svg';
import closeMenu from '@/assets/images/icon-close.svg';
import './SideBar.scss'
import {Link} from "react-router-dom";

function SideBar({currentPage}) {
    const [open, setOpen] = useState(false)

    const mergedLinks = [...mainLinks, ...subLinks];

    return (
        <header className="sidebar">
            <nav className="sidebar__navigation">
                <div className="sidebar__main-nav">
                    <Link className="sidebar__logo" to={`/`}>
                        <LogoFullIcon/>
                    </Link>

                    <img
                        className="sidebar__menu-icon"
                        src={open ? closeMenu : hamburgerMenu}
                        alt=""
                        onClick={() => {
                            setOpen(!open)
                        }}
                    />

                    <Navigation links={mainLinks} currentPage={currentPage}/>
                </div>

                <Navigation links={subLinks}/>

                {open &&
                    <Navigation
                        links={mergedLinks}
                        currentPage={currentPage}
                        mobile
                        onLinkClick={() => setOpen(false)}
                    />
                }
            </nav>
        </header>
    );
}

export default SideBar;