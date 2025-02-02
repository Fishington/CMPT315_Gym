import HomeIcon from '../../Icons/HomeIcon';
import CalendarIcon from '../../Icons/CalendarIcon';
import WorkoutIcon from '../../Icons/ExercisesIcon';
import MealPlanIcon from '../../Icons/MealPlanIcon';
import PersonalTrainerIcon from '../../Icons/PersonalTrainerIcon';
import SettingsIcon from '../../Icons/SettingsIcon';
import LogOutIcon from '../../Icons/LogoutIcon';

export const mainLinks = [
    {
        title: 'Home',
        href : '/home',
        icon : <HomeIcon/>
    },
    // {
    //     title: 'Schedule',
    //     href : '/schedule',
    //     icon : <CalendarIcon/>
    // },
    {
        title: 'Workout',
        href : '/workout',
        icon : <WorkoutIcon/>
    },
    // {
    //     title: 'Meal Plan',
    //     href : '/meal-plan',
    //     icon : <MealPlanIcon/>
    // },
    // {
    //     title: 'Personal Trainer',
    //     href : '/personal-trainer',
    //     icon : <PersonalTrainerIcon/>
    // },
]

export const subLinks = [
    {
        title: 'Settings',
        href : '/settings',
        icon : <SettingsIcon/>
    },
    {
        title: 'Log Out',
        href : '/logout',
        icon : <LogOutIcon/>
    },
]