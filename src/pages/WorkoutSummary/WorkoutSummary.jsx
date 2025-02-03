import React, {useEffect} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import {slugToTitle} from '@/utils/formatter.js';

function WorkoutSummary() {
    const { name } = useParams();
    const {setPageTitle} = useOutletContext();

    useEffect(() => {
        setPageTitle('Workout Summary')
    }, [setPageTitle]);

    return (
            <>
                <p>The workout summary of the workout {slugToTitle(name)}</p>

                <Button color='blue' size='full-width' href={`/workout`}>
                    Return to Workouts
                </Button>
            </>
    );
}

export default WorkoutSummary;