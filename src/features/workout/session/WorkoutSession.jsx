import React from 'react';
import {useParams} from 'react-router-dom';
import PageHeader from '@/components/Layout/PageHeader/index.js';

import {tempExercisesList, tempRoutineList} from '@/data/tempData.js';
import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';

import MealPlanIcon from '@/components/Icons/MealPlanIcon';
import ExerciseList from '@/components/ExerciseList';
import ItemDetails from '@/components/ItemDetails';
import SessionTimer from '@/features/workout/session/SessionTimer.jsx';
import ItemAbout from '@/components/ItemAbout/index.js';
import MultiColumnList from '@/components/MultiColumnList/index.js';
import ExerciseTimer from '@/features/workout/session/ExerciseTimer.jsx';


function WorkoutSession() {
    const {id} = useParams();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));
    const exercise = tempExercisesList.find((ex) => ex.id === Number(id))

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
            <PageHeader pageTitle="Dumbbell Only Workout for Beginners" showBack={true}/>

            <TwoColumns secondColumnWidth="max-content">
                <TwoColumns.Column>
                    <video width="100%" height="100%" controls>
                        <source src={exercise.video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <Section>
                        <SessionTimer routineId={id}/>
                    </Section>

                    <Section title={'Workout Details'}>
                        <Card>
                            <ItemDetails columns={3} details={itemDetails}/>
                            <ItemAbout aboutName="Workout Routine" data={routine.about}/>
                            <MultiColumnList dataName="Equipment" data={routine.equipment}/>
                        </Card>
                    </Section>

                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section>
                        <ExerciseTimer/>
                    </Section>

                    <Section title="Upcoming exercises">
                        <ExerciseList routine={routine}/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default WorkoutSession;