import React from 'react';
import { Link } from "react-router-dom";

const exercises = [
    { id: "1", name: "Dragon Flag", description: "Details about Exercise A" },
    { id: "2", name: "One Leg Dumbbell Squat", description: "Details about Exercise B" },
    { id: "3", name: "Standing Hammer Curl", description: "Details about Exercise C" },
];

function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function ViewExercises() {
    return (
        <div>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <Link to={`/workout/exercises/${generateSlug(exercise.name)}`}>{exercise.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewExercises;