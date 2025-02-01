import {useParams} from 'react-router-dom';
import Button from '../../components/Button/index.js';
import React from 'react';

function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function WorkoutSession() {
    const { name } = useParams();

    return (
        <>
            <p>Workout Session of {name}</p>

            <Button color='blue' size='full-width' href={`/workout/summary/${generateSlug(name)}`}>
                Routine Summary
            </Button>
        </>
    );
}

export default WorkoutSession;