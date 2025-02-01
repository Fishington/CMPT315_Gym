import React from 'react';
import Button from '../../components/Button/index.js';

function Workout() {
    return (
        <>
            <Button color='blue' size='full-width' href="/workout/exercises">
                View Exercises 
            </Button>

            <Button color='blue' size='full-width' href="/workout/routines">
                View Workout Routines
            </Button>
        </>
    );
}

export default Workout;