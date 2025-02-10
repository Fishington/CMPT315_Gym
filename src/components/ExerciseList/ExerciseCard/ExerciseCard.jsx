import Card from '@/components/Card/index.js';

import './ExerciseCard.scss'

import {tempExercisesList} from '@/data/tempData.js';

function ExerciseCard({type, exercise, index}) {
    const matchedExercise = tempExercisesList.find((ex) => ex.id === exercise.workoutId);

    return (
        <li>
            <Card variant="exercise-card">
                <h3 className="exercise-card__index">{index + 1}</h3>

                <div className="exercise-card__content">
                    <img className="exercise-card__image" src={matchedExercise.image} alt=""/>

                    <div className="exercise-card__details">
                        <h3 className="exercise-card__name">{matchedExercise.name}</h3>

                        <div className="exercise-card__stats">
                            {type === 'exercises' ? (
                                <>
                                    <section>
                                        <p>{exercise.reps} reps x {exercise.sets} sets</p>
                                    </section>

                                    <section>
                                        <p>{matchedExercise.timePerSet} minutes</p>
                                    </section>
                                </>
                            ) : (
                                <section>
                                    <p>
                                        {matchedExercise.stretchPerSide} seconds {matchedExercise.stretchBothSide ? ` each ${matchedExercise.stretchFocus}` : ''}
                                    </p>
                                </section>
                            )}

                            <section>
                                <p>{((matchedExercise.caloriesMin + matchedExercise.caloriesMax) / 2).toFixed(0)} cals</p>
                            </section>
                        </div>
                    </div>

                </div>
            </Card>
        </li>
    );
}

export default ExerciseCard;