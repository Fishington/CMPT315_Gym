import React from 'react';
import {useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import './WorkoutSession.scss'

function WorkoutSession() {
    const {id} = useParams();

    return (
        <>
            <PageHeader pageTitle="Dumbbell Only Workout for Beginners" showBack={true}/>

            <Button color="blue" size="full-width" href={`/workout/summary/${id}`}>
                Finish Workout Routine
            </Button>
        </>
    );
}

export default WorkoutSession;