import ItemDetails from '@/components/ItemDetails/index.js';
import ItemAbout from '@/components/ItemAbout/index.js';
import MultiColumnList from '@/components/MultiColumnList/index.js';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';

export default function MainRoutineDetails({children, routine}) {
    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : routine.level,
            subtitle: 'Level'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.count} Exercises`,
            subtitle: 'Total Exercises'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.caloriesMin} - ${routine.caloriesMax} Cal`,
            subtitle: 'Calories Burned'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.length.split(':')[0]}:${routine.length.split(':')[1]}`,
            subtitle: 'Duration'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : routine.targetMuscle,
            subtitle: 'Target Muscles'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : routine.goal,
            subtitle: 'Workout Goal'
        },
    ]
    
    return (
        <>
            <ItemDetails columns={3} details={itemDetails}/>
            {children}
            <ItemAbout aboutName="Workout Routine" data={routine.about}/>
            <MultiColumnList dataName='Equipment' data={routine.equipment}/>
        </>
    );
}