import './SideBar.scss'

import LogoFullIcon from '../Icons/LogoFullIcon';
import HomeIcon from '../Icons/HomeIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import ExercisesIcon from '../Icons/ExercisesIcon';
import MealPlanIcon from '../Icons/MealPlanIcon';
import PersonalTrainerIcon from '../Icons/PersonalTrainerIcon';
import SettingsIcon from '../Icons/SettingsIcon';
import LogoutIcon from '../Icons/LogoutIcon';

import LinkList from './Navigation';

const mainLinks = [
    {
        title: 'Home',
        href : '/home',
        icon : <HomeIcon/>
    },
    {
        title: 'Schedule',
        href : '/schedule',
        icon : <CalendarIcon/>
    },
    {
        title: 'Exercises',
        href : '/exercises',
        icon : <ExercisesIcon/>
    },
    {
        title: 'Meal Plan',
        href : '/meal-plan',
        icon : <MealPlanIcon/>
    },
    {
        title: 'Personal Trainer',
        href : '/personal-trainer',
        icon : <PersonalTrainerIcon/>
    },
]

const subLinks = [
    {
        title: 'Settings',
        href : '/settings',
        icon : <SettingsIcon/>
    },
    {
        title: 'Log Out',
        href : '/logout',
        icon : <LogoutIcon/>
    },
]

function SideBar({currentPage}) {
    return (
        <header className="sidebar">
            <nav className="sidebar__navigation">
                <div className="sidebar__main-nav">
                    <LogoFullIcon/>
                    
                    <LinkList links={mainLinks} currentPage={currentPage}/>
                </div>

                <LinkList links={subLinks} currentPage={currentPage}/>
            </nav>
        </header>
    );
}

export default SideBar;