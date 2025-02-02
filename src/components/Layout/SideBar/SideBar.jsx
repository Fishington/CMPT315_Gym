import { mainLinks, subLinks } from './sideBarLinks.jsx';

import LogoFullIcon from '../../Icons/LogoFullIcon';
import Navigation from './Navigation';

import './SideBar.scss'

function SideBar({currentPage}) {
    return (
        <header className="sidebar">
            <nav className="sidebar__navigation">
                <div className="sidebar__main-nav">
                    <LogoFullIcon/>
                    
                    <Navigation links={mainLinks} currentPage={currentPage}/>
                </div>

                <Navigation links={subLinks} currentPage={currentPage}/>
            </nav>
        </header>
    );
}

export default SideBar;