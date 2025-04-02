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
        href : '/',
        icon : <HomeIcon/>
    },
    {
        title: 'Workout',
        href : '/workout',
        icon : <WorkoutIcon/>
    },
]

export const subLinks = [
    {
        title: 'Log Out',
        icon : <LogOutIcon/>
    },
]