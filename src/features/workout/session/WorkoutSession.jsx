import React from 'react';
import {useParams} from 'react-router-dom';
import PageHeader from '@/components/Layout/PageHeader/index.js';

import TwoColumns from '@/components/Layout/TwoColumns';
import Card from '@/components/Card';
import Section from '@/components/Layout/Section';

import ExerciseList from '@/features/workout/components/ExerciseList/index.js';
import SessionTimer from '@/features/workout/session/SessionTimer.jsx';
import ExerciseTimer from '@/features/workout/session/ExerciseTimer.jsx';
import MainRoutineDetails from '@/features/workout/routines/MainRoutineDetails.jsx';

import {tempRoutineList} from '@/data/tempData.js';
import exercisesList from '@/data/exercises.json';


function WorkoutSession() {
    const {id} = useParams();

    const routine = tempRoutineList.find((ro) => ro.id === Number(id));
    const exercise = exercisesList.find((ex) => ex.id === Number(id))

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
                            <MainRoutineDetails routine={routine}/>
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