import {Link} from 'react-router-dom';

import Card from '@/components/Card';
import ExerciseCardContent from './ExerciseCardContent.jsx';

import './ExerciseCard.scss'

import exercisesList from '@/data/exercises.json';

function ExerciseCard({type, exercise, index}) {
    const matchedExercise = exercisesList.find((ex) => ex.id === exercise.workoutId);

    if (!matchedExercise)
        return (
            <Card variant="exercise-card">
                <h3>Exercise not found in database</h3>
            </Card>
        )

    return (
        <li>
            <Link to={`/workout/exercises/${exercise.workoutId}`}>
                <Card variant="exercise-card">
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