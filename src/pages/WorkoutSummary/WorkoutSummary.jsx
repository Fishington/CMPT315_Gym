import React from 'react';
import { useParams } from "react-router-dom";
import Button from '../../components/Button/index.js';

function WorkoutSummary() {
    const { name } = useParams();

    return (
            <>
                <p>This page contains details about {name}</p>

                <Button color='blue' size='full-width' href={`/workout`}>
                    Return to Workout
                </Button>
            </>
    );
}

export default WorkoutSummary;