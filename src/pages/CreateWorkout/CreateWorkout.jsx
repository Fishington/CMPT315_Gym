import Button from '@/components/Button/index.js';
import React, {useEffect} from 'react';
import {useOutletContext} from 'react-router-dom';

function CreateWorkout() {
    const {setPageTitle} = useOutletContext();

    useEffect(() => {
        setPageTitle('Create A Workout Routine')
    }, [setPageTitle]);

    return (
        <>
            <Button color="blue" size="full-width" href="/workout/routines">
                Create Routine
            </Button>
        </>
    );
}

export default CreateWorkout;