import React, {useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import Button from '@/components/Button/index.js';
import {toSlug} from '@/utils/formatter.js';

const exercises = [
    { id: "1", name: "Dumbbell Only Workout for Beginners" },
    { id: "2", name: "Dumbbell Only Workout for Intermediates" },
    { id: "3", name: "Dumbbell Only Workout for Advanced Lifters" },
    { id: "4", name: "20 Minute HIIT Workout You Can Do Anywhere"},
];

function ViewWorkoutRoutines() {
    const { setBackTarget } = useOutletContext();

    useEffect(() => {
        setBackTarget({target:'/workout', showBack: true})
    }, [setBackTarget]);

    return (
        <>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <Link to={`/workout/routines/${toSlug(exercise.name)}`}>{exercise.name}</Link>
                    </li>
                ))}
            </ul>

            <Button color='blue' size='full-width' href={`/workout/routines/create`}>
                Create Routine
            </Button>
        </>
    );
}

export default ViewWorkoutRoutines;