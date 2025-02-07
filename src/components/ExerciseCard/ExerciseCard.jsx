import React from 'react';
import Card from '@/components/Card/index.js';
import './ExerciseCard.scss'

// TODO: Replace temp data at some point
import {tempExercisesList} from '@/data/tempData.js';

function ExerciseCard({type, exercise, index}) {
    const matchedExercise = tempExercisesList.find((ex) => ex.id === exercise.workoutId);

    return (
        <li>
            <Card
                padding="1.5rem 3rem 1.5rem 1.5rem"
            >
                <div className="exercise-card">
                    <h3 className="exercise-card__index">{index + 1}</h3>

                    <div className="exercise-card__content">
                        <img className="exercise-card__image" src={matchedExercise.image} alt=""/>

                        <div className="exercise-card__details">
                            <h3 className="exercise-card__name">{matchedExercise.name}</h3>

                            <div className="exercise-card__stats">
                                {type === 'exercises' ? (
                                    <>
                                        <div>
                                            <p>
                                                {exercise.reps} reps x {exercise.sets} sets
                                            </p>
                                        </div>

                                        <div>
                                            <p>
                                                {matchedExercise.timePerSet} minutes
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <p>
                                            {matchedExercise.stretchPerSide} seconds
                                            {matchedExercise.stretchBothSide ? ` each ${matchedExercise.stretchFocus}` : ''} </p>
                                    </div>
                                )}

                                <div>
                                    <p>{((matchedExercise.caloriesMin + matchedExercise.caloriesMax) / 2).toFixed(0)} cals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExerciseCard;