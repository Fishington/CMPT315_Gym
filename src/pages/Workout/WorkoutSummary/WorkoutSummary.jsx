import React from 'react';
import {useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';

function WorkoutSummary() {
    const {id} = useParams();

    return (
        <>
            <PageHeader pageTitle="workout Summary"/>

            <p>Workout Summary of Workout Session</p>

            <Button color="blue" size="full-width" href={`/workout`}>
                Return to Workouts
            </Button>
        </>
    );
}

export default WorkoutSummary;