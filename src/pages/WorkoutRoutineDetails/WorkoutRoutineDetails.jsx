import React from 'react';
import {useParams} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import {slugToTitle, toSlug} from '@/utils/formatter.js';

function WorkoutRoutineDetails() {
    const { name } = useParams();

    return (
            <>
                <p>This page contains details about {slugToTitle(name)}</p>

                <Button color='blue' size='full-width' href={`/workout/session/${toSlug(name)}`}>
                    Start Routine
                </Button>
            </>
    );
}

export default WorkoutRoutineDetails;