import React, {useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import {toSlug} from '../../utils/formatter.js';

const exercises = [
    { id: "1", name: "Dragon Flag", description: "Details about Exercise A" },
    { id: "2", name: "One Leg Dumbbell Squat", description: "Details about Exercise B" },
    { id: "3", name: "Standing Hammer Curl", description: "Details about Exercise C" },
];

function ViewExercises() {
    const { setBackTarget } = useOutletContext();

    useEffect(() => {
        setBackTarget({target:'/workout', showBack: true})
    }, [setBackTarget]);
    
    return (
        <div>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <Link to={`/workout/exercises/${toSlug(exercise.name)}`}>{exercise.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewExercises;