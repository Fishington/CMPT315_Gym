import { mainLinks, subLinks } from './sideBarLinks.jsx';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';
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

                <Navigation links={subLinks}/>
            </nav>
        </header>
    );
}

export default SideBar;