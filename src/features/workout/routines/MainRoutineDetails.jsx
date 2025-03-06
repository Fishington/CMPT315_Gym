import ItemDetails from '@/components/ItemDetails/index.js';
import ItemAbout from '@/components/ItemAbout/index.js';
import MultiColumnList from '@/components/MultiColumnList/index.js';
import MealPlanIcon from '@/components/Icons/MealPlanIcon/index.js';
import {formatTimeToString} from "@/utils/formatter.js";

export default function MainRoutineDetails({children, routine}) {
    const itemDetails = [
        {
            icon    : <MealPlanIcon/>,
            value   : routine.level,
            subtitle: 'Level'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.exerciseCount} Exercises`,
            subtitle: 'Total Exercises'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${routine.calories.min} - ${routine.calories.max} Cal`,
            subtitle: 'Calories Burned'
        },
        {

            icon    : <MealPlanIcon/>,
            value   : `${formatTimeToString(routine.duration)}`,
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
            <div className='grid gap-05'>
                <h3>Created By:</h3>

                <div className="flex gap-1">
                    <img style={{objectFit: 'cover', height: '2.5rem', width: '2.5rem'}} src="/images/hyper-fit-profile-pic.png" alt=""/>
                    <p>HyperFit Team</p>
                </div>
            </div>
            <ItemAbout aboutName="Workout Routine" data={routine.about}/>
            <MultiColumnList dataName="Equipment" data={routine.equipment}/>
        </>
    );
}