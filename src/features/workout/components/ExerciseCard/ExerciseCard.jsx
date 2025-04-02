import {Link} from 'react-router-dom';

import Card from '@/components/Card';
import ExerciseCardContent from './ExerciseCardContent.jsx';

import './ExerciseCard.scss'
import {useEffect, useState} from "react";
import {fetchExerciseById} from "@/api/exerciseApi.js";

function ExerciseCard({type, exercise, index}) {
    const [matchedExercise, setMatchedExercise] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getExercise = async () => {
            try {
                const data = await fetchExerciseById(exercise.workoutId);
                if (data) {
                    setMatchedExercise(data);
                } else {
                    console.error(`Exercise with ID ${exercise.workoutId} not found.`);
                }
            } catch (error) {
                console.error("Error fetching exercise:", error);
            } finally {
                setLoading(false);
            }
        };

        if (exercise.workoutId) getExercise();
    }, [exercise.workoutId]);


    if (loading) {
        return (
            <Card variant="exercise-card">
                <h3>Loading exercise...</h3>
            </Card>
        );
    }

    if (!matchedExercise) {
        return (
            <Card variant="exercise-card">
                <h3>Exercise not found in database</h3>
            </Card>
        );
    }
    return (
        <li>
            <Link to={`/workout/exercises/${exercise.workoutId}`}>
                <Card class="exercise-card-container" variant="exercise-card">
                    <h3 className="exercise-card__index">{index + 1}</h3>

                    <ExerciseCardContent
                        matchedExercise={matchedExercise}
                        type={type}
                        exercise={exercise}
                    />
                </Card>
            </Link>
        </li>
    );
}

export default ExerciseCard;