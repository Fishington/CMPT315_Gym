import {useParams} from 'react-router-dom';

import PageHeader from '@/components/Layout/PageHeader';
import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import ExerciseList from '@/components/ExerciseList';
import ItemDetails from '@/components/ItemDetails';

import {tempRoutineList} from '@/data/tempData.js';

import Button from '@/components/Button/index.js';
import ItemAbout from '@/components/ItemAbout/index.js';
import MultiColumnList from '@/components/MultiColumnList/index.js';

function RoutineDetails() {
    const {id} = useParams();
    const routine = tempRoutineList.find((ro) => ro.id === Number(id));

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
            <PageHeader pageTitle={routine.name} showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <img src={routine.image} alt=""/>

                            <ItemDetails columns={3} details={itemDetails}/>

                            <Button color="blue" size="full-width" to={`/workout/session/${id}`}>
                                Start Workout Routine
                            </Button>

                            <ItemAbout aboutName="Workout Routine" data={routine.about}/>
                            <MultiColumnList dataName='Equipment' data={routine.equipment}/>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="exercises">
                        <ExerciseList routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default RoutineDetails;