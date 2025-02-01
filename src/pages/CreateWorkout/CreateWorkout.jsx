import Button from '../../components/Button/index.js';
import React from 'react';

function CreateWorkout() {
    return (
        <>
            <Button color='blue' size='full-width' href="/workout/routines">
                Create Routine
            </Button>
        </>
    );
}

export default CreateWorkout;