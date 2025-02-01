import React from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button/index.js';

const exercises = [
    { id: "1", name: "Dumbbell Only Workout for Beginners" },
    { id: "2", name: "Dumbbell Only Workout for Intermediates" },
    { id: "3", name: "Dumbbell Only Workout for Advanced Lifters" },
    { id: "4", name: "20 Minute HIIT Workout You Can Do Anywhere"},
];

function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function ViewWorkoutRoutines() {
    return (
        <>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <Link to={`/workout/routines/${generateSlug(exercise.name)}`}>{exercise.name}</Link>
                    </li>
                ))}
            </ul>

            <Button color='blue' size='full-width' href={`/workout/routines/create-workout-routine`}>
                Create Routine
            </Button>
        </>
    );
}

export default ViewWorkoutRoutines;