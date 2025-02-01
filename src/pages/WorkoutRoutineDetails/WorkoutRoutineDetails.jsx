import React from 'react';
import { useParams } from "react-router-dom";
import Button from '../../components/Button/index.js';

function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function WorkoutRoutineDetails() {
    const { name } = useParams();

    return (
            <>
                <p>This page contains details about {name}</p>

                <Button color='blue' size='full-width' href={`/workout/session/${generateSlug(name)}`}>
                    Start Routine
                </Button>
            </>
    );
}

export default WorkoutRoutineDetails;